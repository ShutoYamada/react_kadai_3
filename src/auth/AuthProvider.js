import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  console.log("currentUser");
  console.log(currentUser);

  //サインアップ後認証情報を更新
  const signup = async (name, email, password, navigate) => {
    try {
      console.log("signup...!");
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("????????");
      onAuthStateChanged(auth, (user) => setCurrentUser(user));
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  //ログインさせる
  const login = async (email, password, navigate) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, (user) => setCurrentUser(user));
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  //初回アクセス時に認証済みかチェック
  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ signup, login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
