import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';

type Data = {
  storeId: string,
  name: string,
  location: string,
  operation: string,
  phonenumber: string,
  url: string
}

const StoreList = async (req: NextApiRequest, res: NextApiResponse<Array<Data>>) => {
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as Data[];
  try {
    const querySnapshot = await getDocs(collection(firestore, 'Store'));

    querySnapshot.forEach((item) => {
      var temporary = {} as Data;
      temporary.storeId = item.id;
      temporary.name = item.data().name;
      temporary.location = item.data().location;
      temporary.operation = item.data().operation;
      temporary.phonenumber = item.data().phonenumber;
      temporary.url = item.data().image[0];
      resJsonArray.push(temporary);
    });

    console.log(resJsonArray);

    res.status(200).json(resJsonArray);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export default StoreList;
