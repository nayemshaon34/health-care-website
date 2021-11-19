import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('');
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth]);

    const handleSignOut = () => {
        signOut(auth)
            .then((result) => {
                setUser({});
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const handleEmailSignIn = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleCreateNewUser = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: userName,
        }).then(() => {
            console.log("successful")
        })
    }
    return {
        user,
        setUser,
        error,
        setError,
        email,
        password,
        signInWithGoogle,
        handleSignOut,
        setEmail,
        setPassword,
        userName,
        setUserName,
        handleCreateNewUser,
        updateUserName,
        verifyEmail,
        handleEmailSignIn,
        setIsLoading,
        isLoading
    }
}

export default useFirebase;