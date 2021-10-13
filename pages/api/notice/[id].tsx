import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, doc, getDoc } from "firebase/firestore";
import firebase from '../../../service/firebase';

type Data = {
  title: string,
  content: string,
  datetime: string,
}

const NoticeData = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const firestore = getFirestore(firebase);
  const { id } = req.query;
  const resJsonData = {} as Data;
  try {
    const querySnapshot = await doc(firestore, 'Notice', id as string);
    const getDocQeury = await getDoc(querySnapshot);
    const storeData = getDocQeury.data();
    if (storeData) {
      resJsonData.title = storeData.title;
      resJsonData.content = storeData.content;
      resJsonData.datetime = storeData.datetime;
      res.status(200).json(resJsonData);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default NoticeData;
