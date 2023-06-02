import axios from "axios";

export const fetchNavbarData=async()=>{
 
     const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/navdata`)

     return data;
     
}


