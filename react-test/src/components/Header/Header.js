import React from 'react';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid'


const Header =()=>{
   
    return(
        <Grid xs={12} style={{backgroundColor:"#3f51b5",height: "30px"}}>
            <Grid xs={6} style={{display:"inline-block", width:"50%"} }>
                <Link to="/login" style={{color:"white", fontWeight:"bold" ,textDecoration: "none"}}>Login</Link>
            </Grid>
            <Grid xs={6} style={{display:"inline-block", width:"50%"}}>
                <Link to="/ProductListing" style={{color:"white", fontWeight:"bold" ,textDecoration: "none" }}>Product Listing</Link>
            </Grid>
        </Grid>      
    )

}

export default Header;