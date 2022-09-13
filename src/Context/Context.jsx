import React, { createContext } from "react";
import { useState } from "react";
import information from '../Information/Information.js'
const contextapp = createContext();
const ContextProvider =  ({children})=>{
    const [contextCart , setContextCart] = useState([]);
    return(
    <contextapp.Provider   value = {{information ,setContextCart, contextCart}}>
        {children}
    </contextapp.Provider>
    )
}
export {contextapp , ContextProvider}