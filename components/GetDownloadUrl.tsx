import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Url } from '../dto/store-create.dto';
import firebase from '../service/firebase';

const GetDownloadUrl = async (FileList: File[]): Promise<Array<string>> => {
    var downloadUrls: Array<any> = [];
    try {
        const firestorage: FirebaseStorage = getStorage(firebase, "gs://beeokitchen-env.appspot.com");
        const res = await Array.from(FileList).map(async file => {
            var refStorage = ref(firestorage, '/store/' + file.name);
            await uploadBytes(refStorage, file);
            var downloadUrl: string = await getDownloadURL(refStorage);
            return downloadUrl;
        });
        console.log(res);
        console.log(JSON.stringify(res));
    } catch (e) {
        console.log(e);
    }

    return downloadUrls;
};

export default GetDownloadUrl;