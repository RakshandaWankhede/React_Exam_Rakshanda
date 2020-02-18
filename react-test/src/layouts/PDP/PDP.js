import React from 'react';
import {Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    main:{
        marginTop:100
    },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    textAlign:"center"
  },
  cover: {
    width: "50%",
    height:500
  },
  display:{
    justifyContent: "center",
},
button:{
 padding:"10px",
 color: "white",
 background: "#3f51b5"
}

}));

const ProductDetail =()=>{
    const classes = useStyles();
    const token = useSelector(state=>state.loginReducer.userData);
    const product = useSelector(state=>state.productReducer.product)
    if(!token){
        return(
            <Redirect  from= '/Product' to="/login" />
        )
    }
    console.log(product);
    return(
    <Container className={classes.main}> 
       {product ? <Card className={classes.root}>
            <CardMedia
                    className={classes.cover}
                    image={product.productList[0].compositeProducts[0].EProductMedia.fullURI}
                    title={product.productList[0].compositeProducts[0].displayName}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {product.productList[0].compositeProducts[0].displayName}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {product.productList[0].compositeProducts[0].description}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {product.productList[0].compositeProducts[0].priceEntry.listPrice}
                </Typography>
                </CardContent>
                <CardActions className={classes.display}>
                    <Button size="small" color="primary" className={classes.button}  >
                        Buy Now
                    </Button>
                </CardActions>
            </div>
    </Card> :null}
    </Container>
    )
}
export default ProductDetail