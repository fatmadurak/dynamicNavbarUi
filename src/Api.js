import axios from "axios";

export const fetchNavbarData=async()=>{
 
     const {data}=axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/NavData`)

     
}