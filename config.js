import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBfCnuAC95enPq9qG01MnhYV0DcxK_OpwE",
    authDomain: "project-71-35f37.firebaseapp.com",
    projectId: "project-71-35f37",
    storageBucket: "project-71-35f37.appspot.com",
    messagingSenderId: "497684859022",
    appId: "1:497684859022:web:cde677423e8d2c99e3a1df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()