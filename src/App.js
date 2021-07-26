import React from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app-body">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </div>

      {/* Sidebar */}
      {/* feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
