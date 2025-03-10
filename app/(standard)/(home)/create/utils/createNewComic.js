import { addDataWithAutoID } from "@/app/firestore/addData";
import { db } from "@/lib/firebase";
import { doc, serverTimestamp } from "firebase/firestore";
import addPanelToComic from "./addPanelToComic";

export default async function createNewComic(uid, isSolo) {
  const userRef = doc(db, "users", uid);
  const { result } = await addDataWithAutoID("comics", {
    comicLikes: 0,
    comicTheme: "", // Link to random word API
    completedAt: null,
    createdAt: serverTimestamp(),
    createdBy: userRef,
    isCompleted: false,
    isPublic: false,
    isSolo: isSolo,
    isInProgress: true,
    panels: [],
  });
  console.log(result.id, "<-- this is the new comic id");
  const comicId = result.id;
  const panelId = await addPanelToComic(uid, result.id, isSolo);
  return [comicId, panelId];
}
