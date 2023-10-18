import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY=process.env.REACT_APP_GIPHY_KEY_API
const  Random=()=>{
    

    const [gif,loading,fetchData]=useGif()
    
     
    
   
    return (
        <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] py-[15px]">
            <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
            {
                loading?<Spinner/>:<img src={gif}   alt=""/>
            }
            
            <button onClick={()=>{fetchData()}} 
            className="bg-white w-10/12 text-large py-2 rounded-lg">Generate</button>

        </div>
    )
}

export default Random;