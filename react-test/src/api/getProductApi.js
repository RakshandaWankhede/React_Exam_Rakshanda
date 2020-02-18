import axios from "axios";
import {getProductURL ,productHeaders} from '../configurations/config'

export const getProduct =(data)=>{
    let URL = getProductURL+data;
    return axios.get(URL,{headers:productHeaders});
}