import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';

const StoreList = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const { title, content } = req.body;
            const newNoticeRef = doc(collection(firestore, "Notice"));
            const docData = {
                title: title,
                content: content,
                datetime: "2021-10-11",
            }
            const docRef = await setDoc(newNoticeRef, docData);
            res.status(200).json({ message: "success" });
        } catch (e) {
            console.log("실패: " + e);
        }
      } else {
        // Handle any other HTTP method
      }
    
}

export default StoreList;
