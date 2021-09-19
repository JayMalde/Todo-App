import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
const firebaseApp=initializeApp({
    apiKey: "AIzaSyATzm2Ge46oVq1cYjDmgP61txaU-kXAASM",
    authDomain: "todo-ad799.firebaseapp.com",
    projectId: "todo-ad799",
    storageBucket: "todo-ad799.appspot.com",
    messagingSenderId: "1072842126330",
    appId: "1:1072842126330:web:09565948493b8633fb6a43"
  });

const db=getFirestore(firebaseApp);

export {db};