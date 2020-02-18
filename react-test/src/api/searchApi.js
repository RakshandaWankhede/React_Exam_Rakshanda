import axios from "axios";
import {searchURL ,searchHeaders} from '../configurations/config'

export const search =(data)=>{
    return axios.post(searchURL,data,{headers:searchHeaders});
}
