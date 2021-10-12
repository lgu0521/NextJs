import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, doc, getDoc } from "firebase/firestore";
import firebase from '../../../service/firebase';

type Data = {
  name: string,
  location: string,
  operation: string,
  phonenumber: string,
  url: []
}

const StoreData = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const firestore = getFirestore(firebase);
  const { id } = req.query;
  console.log(id);
  const resJsonData = {} as Data;
  try {
    const querySnapshot = await doc(firestore, 'Store', id as string);
    const getDocQeury = await getDoc(querySnapshot);
    const storeData = getDocQeury.data();
    if (storeData) {
      resJsonData.name = storeData.name;
      resJsonData.location = storeData.location;
      resJsonData.operation = storeData.operation;
      resJsonData.phonenumber = storeData.phonenumber;
      resJsonData.url = storeData.image;
      res.status(200).json(resJsonData);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default StoreData;
