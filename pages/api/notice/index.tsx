import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';

type Data = {
  id: string,
  title: string,
  content: string,
  datetime: string,
}

const NoticeList = async (req: NextApiRequest, res: NextApiResponse<Array<Data>>) => {
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as Data[];
  try {
    const querySnapshot = await getDocs(collection(firestore, 'Notice'));

    querySnapshot.forEach((item) => {
      var temporary = {} as Data;
      temporary.id = item.id;
      temporary.title = item.data().title;
      temporary.content = item.data().content;
      temporary.datetime = item.data().datetime;
      resJsonArray.push(temporary);
    });

    console.log(resJsonArray);

    res.status(200).json(resJsonArray);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export default NoticeList;
