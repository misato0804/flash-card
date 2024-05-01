// import firebase from "firebase/compat/app";
// import { useEffect, useState } from "react";

// export default function useFirebaseAuth() {
//   const [authUser, setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const authStateChanged = async (authState) => {
//     if (!authState) {
//       setAuthUser(null)
//       setLoading(false)
//     }

//     setLoading(true)
//     setAuthUser(authState)
//     setLoading(false)
//   }

//   const clear = () => {
//     setAuthUser(null);
//     setLoading(true);
//   };

//   const signInWithEmailAndPassword = (email: string, password: string) =>
//     firebase.auth().signInWithEmailAndPassword(email, password);

//   const createUserWithEmailAndPassword = (email: string, password: string) =>
//     firebase.auth().createUserWithEmailAndPassword(email, password);

//   const signOut = async() =>
//     firebase.auth().signOut().then(clear);

//   useEffect(() => {
//     const unsbscribe = firebase.auth().onAuthStateChanged(authStateChanged)
//     return () => unsbscribe();
//   }, [])

//   return {
//     authUser,
//     loading,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     signOut
//   }
// }