import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/home/Home";
import List from "./pages/landingPage/list/List";
import Hotel from "./pages/landingPage/hotel/Hotel";
import Register from "./components/landingPage/register/Register";
import Login from "./components/landingPage/register/Login";

import AdminHome from "./pages/admin/home/Home";
import AdminLogin from "./pages/admin/login/Login";
import AdminList from "./pages/admin/list/List";
import Single from "./pages/admin/single/Single";
import New from "./pages/admin/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Route path="/admin/">
        <Route index element={<AdminHome />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={productInputs} title="Add New Product" />}
          />
        </Route>
      </Route>
    </BrowserRouter>
  );
}

export default App;
