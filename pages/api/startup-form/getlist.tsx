import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { StartUpFormDTO } from '../../../dto/startup-form.dto';

const getNoticeDocs = async (req: NextApiRequest, res: NextApiResponse<Array<StartUpFormDTO>>) => {
    const firestore = getFirestore(firebase);
    var resJsonArray = [] as StartUpFormDTO[];
    try {
        const querySnapshot = await getDocs(collection(firestore, 'RequestForm'));
        querySnapshot.forEach((item) => {
            var temporary = {} as StartUpFormDTO;
            temporary.name = item.data().name;
            temporary.area = item.data().area;
            temporary.experience = item.data().experience;
            temporary.openday = item.data().openday;
            temporary.phonenumber = item.data().phonenumber;
            temporary.money = item.data().money;
            resJsonArray.push(temporary);
        });
        console.log(resJsonArray);
        res.status(200).json(resJsonArray);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default getNoticeDocs;