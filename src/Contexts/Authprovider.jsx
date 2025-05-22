import React, { useEffect, useState } from 'react';
import Authcontext from './Authcontext';
import app from '../Firebase/Firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const[loading,setLoading]=useState(true)
  const updateUser = async (updatedData) => {
    setLoading(true)
    try {
      await updateProfile(auth.currentUser, updatedData);
      await auth.currentUser.reload();
      setLoading(false)
      setUser(auth.currentUser);

      return Promise.resolve();
    } catch (error) {
      setLoading(false)
      return Promise.reject(error);
    }
  };
  const signInWithGoogle = () => {
    setLoading(false)
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(false)
    return signOut(auth);
  };
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    loading,
    createUser,
    user,
    setUser,
    logOut,
    signIn,
    updateUser,
    signInWithGoogle,
  };

  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
