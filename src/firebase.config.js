import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB3NwCibIwRfWi2GYlxmeAL3j2u9fu1F58",
    authDomain: "resturantapp-f745a.firebaseapp.com",
    databaseURL: "https://resturantapp-f745a-default-rtdb.firebaseio.com",
    projectId: "resturantapp-f745a",
    storageBucket: "resturantapp-f745a.appspot.com",
    messagingSenderId: "769788585519",
    appId: "1:769788585519:web:4266ec5bd086468bc488da"
  };

  const app = getApps.length> 0 ? getApp() : initializeApp(firebaseConfig);
  const fireStore = getFirestore(app);
  const storage = getStorage(app);

  export {app, fireStore, storage}