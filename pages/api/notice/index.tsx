import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';

type Data = {
  image: string,
  name: string,
  location: string,
  clock: string,
  description: string,
  phonenumber: string
}

const StoreList = async (req: NextApiRequest, res: NextApiResponse<Array<Data>>) => {
  const firestore = getFirestore(firebase);
  try {
    const list = await getDocs(collection(firestore, 'store'));
    list.forEach((item)=>{
        console.log(item.data());
    })
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export default StoreList;
