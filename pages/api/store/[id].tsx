import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, doc, getDoc } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { StoreInfoDTO } from '../../../dto/store-create.dto';

const StoreData = async (req: NextApiRequest, res: NextApiResponse<StoreInfoDTO>) => {
  const firestore = getFirestore(firebase);
  const { id } = req.query;
  console.log(id);
  const resJsonData = {} as StoreInfoDTO;
  try {
    const querySnapshot = await doc(firestore, 'Store', id as string);
    const getDocQeury = await getDoc(querySnapshot);
    const storeData = getDocQeury.data();
    if (storeData) {
      resJsonData.name = storeData.name;
      resJsonData.location = storeData.location;
      resJsonData.operation = storeData.operation;
      resJsonData.phonenumber = storeData.phonenumber;
      resJsonData.url = storeData.url;
      res.status(200).json(resJsonData);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default StoreData;
