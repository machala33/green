import { child, get, onValue } from "firebase/database";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  set,
  ref,
} from "./firebase";

import { useUserContext } from "../hooks/useFormContext";



const createUser = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // const {uid, getIdToken} = response.user
    // return {uid, getIdToken}
    return response.user;
  } catch (error) {
    console.log("error " + error);
  }
};

const writeUserData = (user) => {

  try {
    set(ref(db, "users/" + user.userId), {
      email: user.email,
      username: user.username,
      phone: user.phone,
      balance: 0
    });
  } catch (error) {
    console.log(error);
  }
};

const readUserData = async (userId) => {
  try {
    const dbRef = ref(db)
    const data = await get(child(dbRef, `users/${userId}`))
    if(data.exists()) {
      return data
    }
    // const userData = ref(db, 'users/' +userId)
    // return await onValue(userData, (snapshot) => {
    //   const data = snapshot.val();
    //   return data
    // })
  } catch(error) {
    console.log(error)
  }
}

auth.app;

const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user
  } catch (error) {
    console.log(error)
  }
};

// const getToken = () => {
//     try {
        
//     } catch (error) {
        
//     }
// }

export { createUser, writeUserData, readUserData, login };

// firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   }).catch(function(error) {
//   });