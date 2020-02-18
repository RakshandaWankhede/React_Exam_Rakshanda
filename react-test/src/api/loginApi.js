import axios from "axios";
import {loginURL ,loginHeaders} from '../configurations/config'

export const login =(data)=>{
    return axios.post(loginURL,data,{headers:loginHeaders});
}
