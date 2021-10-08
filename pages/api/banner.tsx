import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from '../../service/firebase';

type Data = {
    url: string
}

const StoreList = async (req: NextApiRequest, res: NextApiResponse<Array<Data>>) => {
    const firestore = getFirestore(firebase);
    var resJsonArray = [] as Data[];
    try {
        const querySnapshot = await getDocs(collection(firestore, "Banner"));

        querySnapshot.forEach((item) => {
            var temporary = {} as Data;
            temporary.url = item.data().image;
            resJsonArray.push(temporary);
        });

        console.log(resJsonArray);

        res.status(200).json(resJsonArray);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export default StoreList;
