import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';

interface Data {
  image: string,
  title: string,
  description: string
}

const MeauList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { name } } = req;
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as Data[];
  try {
    const querySnapshot = await getDocs(collection(firestore, name as string));

    querySnapshot.forEach((item) => {
      var temporary = {} as Data;
      temporary.image = item.data().image;
      temporary.title = item.data().title;
      temporary.description = item.data().description;
      resJsonArray.push(temporary);
    });
    res.status(200).json(resJsonArray);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default MeauList;
