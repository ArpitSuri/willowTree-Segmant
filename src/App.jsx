import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Segments from "./pages/Segmant";
import Detail from "./pages/Details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => (
  <Router>
    {/* <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    /> */}
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/segments" element={<Segments />} />
      <Route path="/segment/:id" element={<Detail />} />
    </Routes>
  </Router>
);

export default App;
