  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { doc, addDoc, getDocs, getFirestore, collection, onSnapshot, deleteDoc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDGHvcdoOoZH2w4Krwv2x-pzGZd65k6HGM",
    authDomain: "fir-js-crud-ec7c9.firebaseapp.com",
    projectId: "fir-js-crud-ec7c9",
    storageBucket: "fir-js-crud-ec7c9.appspot.com",
    messagingSenderId: "291299958091",
    appId: "1:291299958091:web:f5ed51aa76a092551fdcce"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveTask = (title, description) =>{
      addDoc(collection(db, "tasks"),{title, description})
  }

  export const getTasks = () => getDocs(collection(db, "tasks"))

  export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback)

  export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id))

  export const getTask = (id) => getDoc(doc(db,"tasks", id)) 

  export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields)

