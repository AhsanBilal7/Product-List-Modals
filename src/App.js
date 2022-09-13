import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Component/NoPage/NoPage";
import NoPage2 from "./Component/NoPage2/NoPage2";
import ProfileCard from "./Component/CardComp/CardComp";
import Cart from "./Component/cart/Cart";
import { useState,useContext } from "react";
import {contextapp} from './Context/Context.jsx'
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const sho = importAll(
  require.context("./pictures/shoes", false, /\.(png|jpe?g|svg)$/)
);
function App() {
  const [cartApp , setCartApp] = useState([]);
  const data = useContext(contextapp);
  const {contextCart ,setContextCart } = data;
  return (
    <>
    {console.log(contextCart)}
      <div className="App"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setContextCart = {setContextCart}  />} />
          <Route path="/main" element={<Main setContextCart = {setContextCart}/>} />
          <Route path="/nopage" element={<NoPage2 />} />
          <Route path="/profilepage/:arrayName/:id" element={<ProfileCard />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/cart" element={<Cart contextCart = {contextCart}/>} />
          {/* <Route path="/cart" element={<Cart contextCart = {contextCart} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
