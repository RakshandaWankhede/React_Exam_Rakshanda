import React from 'react';
import {Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'


const Header =()=>{
    const LoginRedirect =()=>{
        console.log("login");
        return (
            <Redirect to="/login" />  
        )
    }
    const ListingRedirect =()=>{
        console.log("ProductListing");
        return (
            <Redirect to="/login" />  
        )
    }
    return(
        <Grid container spacing={3}>
            <Grid item xs={6}  onClick={LoginRedirect}>
                Login
            </Grid>
            <Grid item xs={6} onClick={ListingRedirect} >
                Product Listing
            </Grid>
        </Grid>
    )

}

export default Header;