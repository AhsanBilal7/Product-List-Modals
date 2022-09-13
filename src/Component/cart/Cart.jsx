import React from "react";
import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import car from "./cart.module.css";
import { contextapp } from "../../Context/Context";
import { Link } from "react-router-dom";
// import ProductCard from "../ProductCard/ProductCard";
import ProductCard from '../cartCard/Cartcard'
import cart from './cart.module.css'
import Cartcard from "../cartCard/Cartcard";
function Cart(props) {
  // const cartinformation = props.cartInfo
  // console.log(cartinformation)

  const { contextCart } = props;
  return (
    <>
      {console.log(contextCart)}
      {console.log(contextCart == [])}
    <div className={cart.navbarCart}>
        <Navbar />
      </div>
    <Link to={"/main"}>Back to Main</Link>
      <div className={cart.containerCart}>

      { ( contextCart.length == 0 )? <h1>Nothing to Show</h1> :   contextCart.map((arr,index)=>{
        return(
            <>
            <div className={Cart.itemCart}>
            <Cartcard value={arr}/>
            </div>
            </>
        )
      })}
      </div>
      <div>Cart</div>
    </>
  );
}

export default Cart;
