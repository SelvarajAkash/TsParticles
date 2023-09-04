import React, { Fragment } from "react";
import "./App.css";
import Background from "./components/ParticleBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./user/Home";
import Register from "./user/Register";
import Login from "./user/Login";
import ProtectedRouter from "./user/protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <Background />
          <NavBar />
          <Routes>
            <Route path="*" element={<ProtectedRouter />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
