import React from "react";
import Header from "../src/components/header/Header";
import "./App.css";
import Sidebar from "../src/components/sideBar/Sidebar";
import Feed from "../src/components/feed/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "./components/logIn/LogIn";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.name,
            photoURL: userAuth.profilePic,
          })
        );
        //user is logged in
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <LogIn />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          {/* <Widget/> */}
        </div>
      )}
    </div>
  );
}

export default App;
