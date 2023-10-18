import { useEffect, useState } from "react";

import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



const  Tag=()=>{
   
    const [name,SetName]=useState();
    const [gif,loading,fetchData]=useGif(name)

    return (
        <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] py-[15px]">
            <h1 className="text-2xl underline uppercase font-bold">Random {name} Gif</h1>
            {
                loading?<Spinner/>:<img src={gif}   alt=""/>
            }
            <input type="text"
            className="bg-white w-10/12 text-large py-2 rounded-lg text-center"
            onChange={(e)=>{
                SetName(e.target.value);
            }}
            value={name}
            placeholder="search gifs"
            />
            <button onClick={()=>{fetchData(name)}} 
            className="bg-white w-10/12 text-large py-2 rounded-lg">Generate</button>

        </div>
    )
}

export default Tag;