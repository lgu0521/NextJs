import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { NoticeCreateDTO } from '../../../dto/notice-create.dto';

const CreateNotice = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:NoticeCreateDTO = JSON.parse(req.body);
            const newNoticeRef = doc(collection(firestore, "Notice"));
            const docData:NoticeCreateDTO = {
                title: reqBody.title,
                content: reqBody.content,
                datetime: '',
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

export default CreateNotice;
