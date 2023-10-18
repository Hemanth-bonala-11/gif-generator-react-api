import { useEffect,useState } from "react";
import axios from "axios";

const API_KEY=process.env.REACT_APP_GIPHY_KEY_API
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function useGif(tag){
    
    const [gif,setGif]=useState("");
    const [loading,SetLoading]=useState(false);

    async function fetchData(tag){
        
        SetLoading(true);
        
        const output =await axios.get(tag?`${url}&tag=${tag}`:url);
        const imageSource= output.data.data.images.fixed_height.url;
        console.log(imageSource);
        setGif(imageSource);
        
        SetLoading(false)
        console.log("inside fetch data");
   
    }
    
    useEffect(()=>{
        fetchData(tag);
     },[])
   return [gif,loading,fetchData]
}

export default useGif;