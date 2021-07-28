import React from "react";
import Header from "../src/components/header/Header";
import "./App.css";
import Sidebar from "../src/components/sideBar/Sidebar";
import Feed from "../src/components/feed/Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import LogIn from "./components/logIn/LogIn";

function App() {
  const user = useSelector(selectUser);

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
