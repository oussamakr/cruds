import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Addlist from "./components/Addlist";
import Myliste from "./components/Myliste";
import Details from "./components/Details";
import Delate from "./components/Delate";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mylist" element={<Myliste />}></Route>
          <Route path="/addlist" element={<Addlist />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/delate/:id" element={<Delate />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
