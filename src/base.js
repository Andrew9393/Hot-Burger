import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBENO2FJQYDtEuINZoKdEGC22zstiKo3TM",
    authDomain: "very-hot-burgers-17103.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-17103-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp} ;
export default base