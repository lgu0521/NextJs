import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { MenuCreateDTO } from "../../../dto/menu-create.dto";


const CreateMeau = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:MenuCreateDTO = JSON.parse(req.body);
            const newDocRef = doc(collection(firestore, reqBody.catagory));
            const docData = {
                title: reqBody.title,
                description: reqBody.description,
                url: reqBody.url
            }
            const docRef = await setDoc(newDocRef, docData);
            res.status(200).json({ message: "success" });
        } catch (e) {
            console.log("실패: " + e);
        }
      } else {
        // Handle any other HTTP method
      }
}

export default CreateMeau;
