import axios from "axios";
import { baseURl } from "./baseUrl";

const getSubscribers= async()=> {
  try{
    const res = await axios.get(`${baseURl}subscribers`);
  console.log(res.data)
  }
  catch(error:any)
   {
console.log(error.message)
  }
};

getSubscribers()
// a) get

