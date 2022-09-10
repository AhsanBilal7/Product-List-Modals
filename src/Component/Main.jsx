import React, { useContext, useState } from "react";
import { contextapp } from "../Context/Context";
import Apicall from "../Apicall/Apicall";
import ProfileCard from "./CardComp/CardComp";
import ProductCard from "./ProductCard/ProductCard";
import main from "./Main.module.css";
import { shoes, chairs, tables } from "../Information/Information";
import Navbar from "./Navbar/Navbar";
import { useReducer } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
function Main() {
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
    }
  };

  const [name, setName] = useState("Shoes");
  const [productValue, setProductType] = useReducer(action, shoes);
  const data = useContext(contextapp);
  const [modalVariable , setModalVariable] =useState({})
  const [modalFlag , setModalFlag] =useState(false)

  // console.log(data);
  // Apicall();
  const clickComp = (arr, index) => {
    console.log("Component is clicked", index);
    // setModalVariable(arr);
    // setModalFlag(true)
   
  };
  return (
    <>
      <div>
        <div className={main.navbarMain}>
          <Navbar />
        </div>
        <div className={main.headerMain}>
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
          <h3>list of {name} are given below: </h3>
          <div className={main.containerMain}>
            {modalFlag ? "":
              productValue.map((arr, index) => {
              return (
                <>
                <a href={`/profilepage/${name}/${index}`}>
                  {console.log(arr)}
                  <div
                    onClick={() => clickComp(arr, index)}
                    className={main.containerItem}
                  >
                    <ProductCard value={arr} />
                  </div>
                </a>
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
