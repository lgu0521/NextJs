import type { NextApiRequest, NextApiResponse } from 'next'
import { getStorage, ref, FirebaseStorage , getDownloadURL} from 'firebase/storage';
import firebase from '../../../service/firebase';
import "firebase/storage";
import { StoreCreateDTO } from '../../../dto/store-create.dto';


const ImageForm = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const firestorage: FirebaseStorage = getStorage(firebase, "gs://beeokitchen-env.appspot.com");
        const reqBody:StoreCreateDTO = JSON.parse(req.body);
        console.log(reqBody);
       // const Store = await ref(firestorage, '/store/image1.jpeg');
       // getDownloadURL(Store);
        res.status(200).json({ message: "success" });
    } catch (e) {
        console.log("실패: " + e);
    }
}

export default ImageForm;