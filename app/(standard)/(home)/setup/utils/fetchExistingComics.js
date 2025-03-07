import { db } from "@/lib/firebase";
import {
  doc,
  query,
  getDocs,
  collection,
  where,
  orderBy,
} from "firebase/firestore";

export default async function fetchExistingComics(uid, isSolo) {
  const userRef = doc(db, "users", uid);
  const q = query(
    collection(db, "comics"),
    where("createdBy", "==", userRef),
    where("isSolo", "==", isSolo),
    where("isCompleted", "==", false),
    where("isInProgress", "==", false),
    orderBy("createdAt", "asc")
  );
  const querySnapshot = await getDocs(q);
  const comics = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return comics;
}
