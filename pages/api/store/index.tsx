import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { StoreInfoDTO } from '../../../dto/store-create.dto';

const StoreList = async (req: NextApiRequest, res: NextApiResponse<Array<StoreInfoDTO>>) => {
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as StoreInfoDTO[];
  try {
    const querySnapshot = await getDocs(collection(firestore, 'Store'));

    querySnapshot.forEach((item) => {
      var temporary = {} as StoreInfoDTO;
      temporary.storeId = item.id;
      temporary.name = item.data().name;
      temporary.location = item.data().location;
      temporary.operation = item.data().operation;
      temporary.phonenumber = item.data().phonenumber;
      temporary.url = item.data().url[0];
      resJsonArray.push(temporary);
    });

    console.log(resJsonArray);

    res.status(200).json(resJsonArray);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export default StoreList;
