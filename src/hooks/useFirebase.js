import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,signOut } from "firebase/auth";


initializeAuthentication()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {

    const [user, setUser] = useState({})
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        /*this method will be returned, 
        from here signInUsingGoogle() will be called 
        and then the rest of signInWithPopup()
         will be executed there. */
       

    }

    const SignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});

            })
    }
    //obsere whether user auth state changed or not
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                //User is signed out
            }
        })
        return unsubscribe;
    }, [])
   
    
    return {
        user,
        setUser,
        signInUsingGoogle,
        SignOut
    }
}

export default useFirebase;