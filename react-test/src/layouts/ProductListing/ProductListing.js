import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import IconButton from "@material-ui/core/IconButton";
import { Container } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {TextField} from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product'

import {searchProducts} from '../../actions/searchAction'

const useStyles = makeStyles({
    root: {
      textAlign:"end",
    },
  });
  
const ProductListing =()=>{
    const classes = useStyles();
    const [searchText,setSearchText] = useState('');
    const dispatch = useDispatch();
    const products = useSelector(state=>state.productSearchReducer.products);
    const product = useSelector(state=>state.productReducer.product);

    // useEffect(()=>{
    //     const body={
    //         "term": "",
    //         "sortBy": "new asc",
    //         "page": 0,
    //         "recordsPerPage": 20,
    //         "heirarchical": [],
    //         "multiselect": [],
    //         "singleselect": [],
    //         "range": []
    //     }
    //     dispatch(searchProducts(body));

    // },[])
 
    const clickHandler = ()=>{
        const body={
            "term": searchText,
            "sortBy": "new asc",
            "page": 0,
            "recordsPerPage": 20,
            "heirarchical": [],
            "multiselect": [],
            "singleselect": [],
            "range": []
        }
        dispatch(searchProducts(body));
    }
    const changeHandler = (e)=>{
        setSearchText(e.target.value);
    }
    return(
        <div>
            {product ? <Redirect  from= '/login' to="/Product" /> : false}
            <Grid container spacing={3}>
            <Grid item xs={12} className={classes.root}>
                <TextField
                    label="Search Product"
                    onChange={changeHandler}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={clickHandler}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />
            </Grid>
            {products? <Grid item xs={12}>
                <Container>
                {products.map(function(item, i){
                    return <Product key={i} 
                    pName={item.sfdcName} 
                    image={item.compositeProducts[0].EProductMedia.smallURI} 
                    listPrice={item.compositeProducts[0].priceEntry.listPrice}
                    pId={item.sfid}
                    ></Product>
                })}
                </Container>
            </Grid>:null}

            </Grid>
        </div>
    )

}

export default ProductListing;