import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJ-m1aPHWEwvml1yHhSja3ZlHqVSSXRYM",
    authDomain: "crwn-db-master2.firebaseapp.com",
    databaseURL: "https://crwn-db-master2.firebaseio.com",
    projectId: "crwn-db-master2",
    storageBucket: "crwn-db-master2.appspot.com",
    messagingSenderId: "196627988655",
    appId: "1:196627988655:web:79abe606c59f8793e4945a",
    measurementId: "G-M11KW0MSQ6"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log(userAuth);
  if (!userAuth) return;

  // data 都會在 doc 裡面
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }

  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;