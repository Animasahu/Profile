import React from "react";
import Users from './component/Users';
import { Routes, Route } from "react-router-dom";
import UserDetails from "./component/UserDetail";


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/"  element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
      
    </div>

  );
}

export default App;
