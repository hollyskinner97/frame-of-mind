import { app } from "@/lib/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function getData(collection, id) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}