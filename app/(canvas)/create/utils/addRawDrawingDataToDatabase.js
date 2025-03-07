import addData from "@/app/firestore/addData";
import { db } from "@/lib/firebase";
import { doc } from "firebase/firestore";

export default async function addRawDrawingDataToPanel(rawDrawingData) {
    // const panelRef = doc(db, "panels", "9cRYq4E8ExRnvurI60dv")
    // console.log(panelRef.id, "<--- panelRef")
    const rawDrawingDataString = JSON.stringify(rawDrawingData);
    await addData("panels", "9cRYq4E8ExRnvurI60dv", { rawDrawingData: rawDrawingDataString })
}