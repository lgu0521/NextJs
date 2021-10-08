import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCjqEVxe4F0CRkQHFNIH_nmwDOzHOJk-Bw",
    authDomain: "beeokitchen-env.firebaseapp.com",
    projectId: "beeokitchen-env",
    storageBucket: "beeokitchen-env.appspot.com",
    messagingSenderId: "437687409867",
    appId: "1:437687409867:web:7061788d625a5aed180f4e",
    measurementId: "G-LYK6H9YMKB"
}

const firebase = initializeApp(firebaseConfig);

export default firebase;