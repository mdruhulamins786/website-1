import React, { useState } from "react";
import app from "../../src/firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import { useEffect } from "react";
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in google
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // side effect data load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // sign in email
  const signInEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile name and photo URL
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // log in email, password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // verify email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const authInfo = {
    user,
    updateUserProfile,
    loading,
    setLoading,
    providerLogin,
    logOut,
    logIn,
    signInEmail,
    verifyEmail,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
