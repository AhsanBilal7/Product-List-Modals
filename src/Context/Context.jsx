import React, { createContext } from "react";
import information from '../Information/Information.js'
const contextapp = createContext();

const ContextProvider =  ({children})=>{
    return(
    <contextapp.Provider value = {information}>
        {children}
    </contextapp.Provider>
    )
}
export {contextapp , ContextProvider}