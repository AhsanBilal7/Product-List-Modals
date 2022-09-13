import React, { useContext, useState } from "react";
import { setContextCart, contextapp } from "../Context/Context";
import Apicall from "../Apicall/Apicall";
import ProfileCard from "./CardComp/CardComp";
import ProductCard from "./ProductCard/ProductCard";
import main from "./Main.module.css";
import { shoes, chairs, tables } from "../Information/Information";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
function Main(props) {
  const data = useContext(contextapp);
  const { contextCart, setContextCart } = data;

  const action = (productValue, setProductType) => {
    if (setProductType.type == "shoes") {
      setName("Shoes");
      return shoes;
    } else if (setProductType.type == "chairs") {
      setName("Chairs");
      return chairs;
    } else if (setProductType.type == "tables") {
      setName("Tables");
      return tables;
    } else return shoes;
  };

  const [name, setName] = useState("Shoes");
  const [productValue, setProductType] = useReducer(action, shoes);
  // const data = useContext(contextapp);
  const [modalVariable, setModalVariable] = useState({});
  const [modalFlag, setModalFlag] = useState(false);
  const [cartInfo, setCartInfo] = useState([]);
  // console.log(data.contextCart);
  // Apicall();
  const clickComp = (arr, index) => {
    // console.log("Component is clicked", index);
    // setModalVariable(arr);
    // setModalFlag(true)
  };
  return (
    <>
      {console.log("This is Main", contextCart)}
      <div>
        <div className={main.navbarMain}>
          <Navbar />
        </div>
        <div className={main.headerMain}>
          <div className={main.buttonContainer}>
            <div className={main.buttonContainerMain}>
              <span className={productValue == shoes ? main.buttonActive : ""}>
                {" "}
                <button onClick={() => setProductType({ type: "shoes" })}>
                  Shoes
                </button>{" "}
              </span>
              <span className={productValue == tables ? main.buttonActive : ""}>
                {" "}
                <button onClick={() => setProductType({ type: "tables" })}>
                  Tables
                </button>{" "}
              </span>
              <span className={productValue == chairs ? main.buttonActive : ""}>
                {" "}
                <button onClick={() => setProductType({ type: "chairs" })}>
                  Chairs
                </button>{" "}
              </span>
            </div>
            <div>
              <Link to={"/cart"}>
                {" "}
                <button className={main.cartBtn}> Show Cart </button>
              </Link>
            </div>
          </div>

          {/* <a href="/cart">
            <button className={main.cartBtn}>Show Cart</button>
          </a> */}
          <h3>list of {name} are given below: </h3>
          <div className={main.containerMain}>
            {modalFlag
              ? ""
              : productValue.map((arr, index) => {
                  return (
                    <>
                      <Link to={`/profilepage/${name}/${index}`}>
                        {/* {console.log(arr)} */}
                        <div
                          onClick={() => clickComp(arr, index)}
                          className={main.containerItem}
                        >
                          <ProductCard
                            cartInfo={cartInfo}
                            setCartInfo={setCartInfo}
                            value={arr}
                            contextCart={contextCart}
                            setContextCart={setContextCart}
                          />
                        </div>
                      </Link>
                    </>
                  );
                })}
          </div>
          {/* <p>This is Paragraph </p> */}
          {/* {modalFlag ? <ProfileCard setModalFlag={setModalFlag} value={modalVariable} /> : "" }  */}
        </div>
      </div>
    </>
  );
}

export default Main;
