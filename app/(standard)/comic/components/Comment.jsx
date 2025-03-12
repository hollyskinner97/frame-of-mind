"use client";
import { auth } from "@/lib/firebase";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
/** @jsxImportSource @emotion/react */
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  keyframes,
  Link,
  Typography,
} from "@mui/material";
import { Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Comment({
  comment: {
    displayName,
    avatarUrl,
    commentBody,
    commentPostedDate,
    likes,
    isOptimistic,
    userRef,
  },
  commentId,
  handleDeleteComment,
}) {
  const [authUser] = useAuthState(auth);
  const [isUsersComment, setIsUsersComment] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [dateTime, setDateTime] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  const [hasBeenLiked, setHasBeenLiked] = useState(false);
  const [commentLikes, setCommentLikes] = useState(likes);

  useEffect(() => {
    if (authUser && userRef) {
      if (authUser.uid === userRef.id) {
        setIsUsersComment(true);
      }
    }
  }, [authUser]);

  useEffect(() => {
    // prevent hydration errors by handling date formatting in a useEffect
    if (
      !isOptimistic &&
      commentPostedDate &&
      typeof commentPostedDate.toDate === "function"
    ) {
      const date = commentPostedDate.toDate();
      setDateTime(date.toISOString().split("Z")[0]);
      setTimestamp(
        date.toLocaleString("en-GB", {
          timeZone: "UTC",
          hour12: true,
        })
      );
    }
  }, [commentPostedDate, isOptimistic]);

  function handleLikeClick() {
    setHasBeenLiked((prev) => !prev);

    setCommentLikes((prevLikes) =>
      hasBeenLiked ? prevLikes - 1 : prevLikes + 1
    );
  }

  function handleDeleteClick() {
    if (isUsersComment) {
      handleDeleteComment(commentId);
      setOpenDialog(true);
    }
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  // const pulse = keyframes`0% {
  //   opacity: 0.8;
  // }
  // 50% {
  //   opacity: 0.5;
  // }
  // 100% {
  //   opacity: 0.8;
  // }`;

  return (
    <Box sx={{ my: 1 }}>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          mb: 1.5,
          mt: 1,
        }}
      >
        <Avatar
          src={
            typeof avatarUrl === "string" && avatarUrl.length > 0
              ? avatarUrl
              : undefined
          }
          sx={{
            border: 2,
            borderColor: "primary.emphasis",
            bgcolor: "primary.light",
            color: "primary.main",
          }}
        >
          {typeof avatarUrl === "string" && avatarUrl.length === 0
            ? displayName[0]
            : null}
        </Avatar>
        <Box>
          {/* <Link href={"/profile/" + uid} underline="hover"> */}
          <Typography variant="body1">{displayName || "Unknown"}</Typography>
          {/* </Link> */}

          {isOptimistic ? (
            <Typography variant="body2">Posting in progress...</Typography>
          ) : (
            <Typography variant="body2" component="time" dateTime={dateTime}>
              {timestamp}
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.light",
            borderRadius: 2,
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            p: 2,
            mr: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
            }}
          >
            {commentBody}
          </Typography>
          {isUsersComment && (
            <Button
              onClick={handleDeleteClick}
              sx={{ p: 0, fontSize: "1.2rem" }}
            >
              <Trash />
            </Button>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 0.5,
            mr: 1,
          }}
        >
          <IconButton onClick={handleLikeClick}>
            {hasBeenLiked ? (
              <Favorite sx={{ color: "red" }} />
            ) : (
              <FavoriteBorder sx={{ color: "gray" }} />
            )}
          </IconButton>
          <Typography variant="body2">Likes: {commentLikes}</Typography>
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Comment successfully deleted!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Dismiss</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
