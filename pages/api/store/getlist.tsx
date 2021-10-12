import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';

type Data = {
    storeId: string
}

const getStoreDocs = async (req: NextApiRequest, res: NextApiResponse<Array<Data>>) => {
    const firestore = getFirestore(firebase);
    var resJsonArray = [] as Data[];
    try {
        const querySnapshot = await getDocs(collection(firestore, 'Store'));
        querySnapshot.forEach((item) => {
            var temporary = {} as Data;
            temporary.storeId = item.id;
            resJsonArray.push(temporary);
        });
        console.log("resJsonArray");
        console.log(resJsonArray);
        res.status(200).json(resJsonArray);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default getStoreDocs;