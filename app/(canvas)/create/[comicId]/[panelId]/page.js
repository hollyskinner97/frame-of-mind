"use client";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Canvas from "@/app/(canvas)/components/canvas";
import TopBar from "@/app/components/TopBar";
import Avatar from "@/app/components/Avatar";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { auth, db } from "@/lib/firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import deletePanel from "@/app/(standard)/(home)/create/utils/deletePanel";
import { useParams, useRouter } from "next/navigation";

export default function Create() {
  const [openCheckDialog, setOpenCheckDialog] = useState(false);
  const [dialogAction, setDialogAction] = useState("");
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [rawDrawingData, setRawDrawingData] = useState([]);
  const [panelCaption, setPanelCaption] = useState("");
  // Pass setPanelCaption into canvas too?
  const { comicId, panelId } = useParams();
  const [authUser] = useAuthState(auth);
  const router = useRouter();

  const [userRef, setUserRef] = useState(null);
  const comicRef = doc(db, "comics", comicId);
  const panelRef = doc(db, "panels", panelId);
  const [validComic, setValidComic] = useState(null);
  const [validPanel, setValidPanel] = useState(null);

  useEffect(() => {
    if (authUser) {
      setUserRef(doc(db, "users", authUser.uid));
    }
  }, [authUser]);

  useEffect(() => {
    console.log(comicRef);
    async function checkIds() {
      const comicSnapshot = await getDoc(comicRef);
      setValidComic(comicSnapshot._document ? true : false);
      const panelSnapshot = await getDoc(comicRef);
      setValidPanel(panelSnapshot._document ? true : false);
    }
    checkIds();
  }, [comicId, panelId]);

  // NEED TO SET UP NEXT.JS STRUCTURE SO COMIC ID AND PANEL ID GET PASSED THROUGH!

  async function handleDiscard() {
    // Also show a dialog box saying it's been saved?
    if (!comicId || !panelId) return;

    await deletePanel(authUser.uid, comicId, panelId);

    setDialogAction("discard");
    setOpenConfirmationDialog(true);
  }

  async function handleSave() {
    // Also show a dialog box saying it's been saved
    try {
      if (!comicId || !panelId) return;

      const rawDrawingDataString = JSON.stringify(rawDrawingData);
      console.log(rawDrawingDataString);

      await updateDoc(panelRef, {
        rawDrawingDataString,
        // panelCaption update here too?
      });

      setDialogAction("save");
      setOpenConfirmationDialog(true);
    } catch (error) {
      console.error("Error saving drawing:", error);
    }
  }

  async function handleSubmit() {
    try {
      if (!comicId || !panelId) return;

      const rawDrawingDataString = JSON.stringify(rawDrawingData);
      console.log(rawDrawingDataString);

      await updateDoc(panelRef, {
        rawDrawingDataString,
        isInProgress: false,
        // panelCaption update here?
      });

      await updateDoc(comicRef, {
        isInProgress: false,
      });

      const comicSnapshot = await getDoc(comicRef);
      if (comicSnapshot.data().panels.length === 8) {
        await updateDoc(comicRef, {
          isCompleted: true,
        });
        await updateDoc(userRef, {
          myComics: arrayUnion(comicRef),
        });
      }

      setDialogAction("submit");
      setOpenConfirmationDialog(true);

      // If comic completed (8 panels), send notification so they can view comic on the completed comic page?
    } catch (error) {
      console.error("Error submitting drawing:", error);
    }
  }

  // Dialog close via 'cancel'
  const handleDialogClose = () => {
    setOpenCheckDialog(false);
    setOpenConfirmationDialog(false);
  };

  if (validComic && validPanel)
    return (
      <>
        <TopBar
          components={
            <>
              <Button
                sx={{ ml: "auto", mr: 0.5 }}
                variant="outlined"
                onClick={() => {
                  setDialogAction("discard");
                  setOpenCheckDialog(true);
                }}
              >
                Discard
              </Button>
              <Button
                disabled={rawDrawingData.length === 0}
                sx={{ ml: 0.5, mr: 0.5 }}
                variant="outlined"
                onClick={() => {
                  handleSave();
                }}
              >
                Save draft
              </Button>

              <Button
                disabled={rawDrawingData.length === 0}
                sx={{ ml: 0.5, mr: 2 }}
                variant="contained"
                onClick={() => {
                  setDialogAction("submit");
                  setOpenCheckDialog(true);
                }}
              >
                Submit
              </Button>
              <Avatar />
            </>
          }
        />

        <Box
          component={"main"}
          sx={{
            mt: "1.25rem",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            maxHeight: "100%",
          }}
        >
          <Canvas setRawDrawingData={setRawDrawingData} />;
        </Box>
        <Box>
          <Dialog open={openCheckDialog} onClose={handleDialogClose}>
            <DialogTitle>
              {dialogAction === "discard" && "Discard Panel"}
              {dialogAction === "submit" && "Submit Panel"}
            </DialogTitle>
            <DialogContent>
              {dialogAction === "discard" && (
                <Typography variant="body1">
                  Are you sure you want to discard this panel? This action
                  cannot be undone.
                </Typography>
              )}
              {dialogAction === "submit" && (
                <Typography variant="body1">
                  Are you ready to submit your panel? Once submitted, you won't
                  be able to make further changes.
                </Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              {dialogAction === "discard" && (
                <Button
                  onClick={() => {
                    setOpenCheckDialog(false);
                    handleDiscard();
                  }}
                >
                  Discard
                </Button>
              )}
              {dialogAction === "submit" && (
                <Button
                  onClick={() => {
                    setOpenCheckDialog(false);
                    handleSubmit();
                  }}
                >
                  Submit
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </Box>
        <Box>
          <Dialog
            disableEscapeKeyDown
            open={openConfirmationDialog}
            onClose={(event, reason) => {
              if (reason !== "backdropClick") {
                handleDialogClose();
              } else return;
            }}
          >
            <DialogTitle>Success!</DialogTitle>
            <DialogContent>
              {dialogAction === "discard" && (
                <Typography variant="body1">
                  Panel successfully deleted. Click below to return to home.
                </Typography>
              )}
              {dialogAction === "save" && (
                <Typography variant="body1">
                  Panel successfully saved. Click below to return to home.
                </Typography>
              )}
              {dialogAction === "submit" && (
                <Typography variant="body1">
                  Panel successfully submitted. Click below to return to home.
                </Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  handleDialogClose();
                  router.push("/");
                }}
              >
                Return home
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </>
    );
  return <>Invalid comic/panel</>;
}
