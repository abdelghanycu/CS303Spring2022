import {initializeApp} from "firebase/app";

const config = {
    apiKey: "AIzaSyBEcxYNguBIrk9vfPQ9OcVjI8pViG1deUM",
    authDomain: "cs303-2022.firebaseapp.com",
    databaseURL: "https://cs303-2022-default-rtdb.firebaseio.com",
    projectId: "cs303-2022",
    storageBucket: "cs303-2022.appspot.com",
    messagingSenderId: "86388572965",
    appId: "1:86388572965:web:0eee8fbcad3f988e4fd0cc",
    measurementId: "G-RTEWXTJJWZ"
};

export const app = initializeApp(config);

