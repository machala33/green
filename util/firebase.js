import firebaseConfig from "./firebaseConfig";

import { initializeApp } from "firebase/app";
import {getDatabase, ref, set, push, update, off, onValue, onChildAdded, onChildChanged, onChildRemoved} from "firebase/database"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, ref, set, push, update, off, onValue, onChildAdded, onChildChanged, onChildRemoved };