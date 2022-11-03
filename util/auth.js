import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  set,
  ref,
} from "./firebase";

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
    });
  } catch (error) {
    console.log(error);
  }
};

auth.app;

const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user
  } catch (error) {
    console.log(error)
  }
};

const getToken = () => {
    try {
        
    } catch (error) {
        
    }
}

export { createUser, writeUserData, login, getToken };

// firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   }).catch(function(error) {
//   });