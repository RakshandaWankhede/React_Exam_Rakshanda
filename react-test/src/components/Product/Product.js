import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getProduct} from "../../actions/productAction"
import { Grid } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import {browserHistory}  from 'react-router'

const useStyles = makeStyles({
  root: {
    padding:"10px",
    display:"inline-block",
    width:"100%",
  },
  align:{
    textAlign:"center",
  },
  media: {
    height: 200,
  },
  heightSet:{
    height: 50,
    overflow: "hidden"
  },
  display:{
      display:"block"
  }
});

export default function Product(props) {
  const classes = useStyles();
  const {pName ,image,listPrice,pId , setIsRedirect} = props;
  const dispatch = useDispatch();
  const clickHandler =()=>{
      dispatch(getProduct(pId));
      setIsRedirect(true);

  }
 

  return (
    <Grid item md={3} className={classes.root}>
        <Card className={classes.align}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={image}
            title={pName}
            />
            <CardContent>
                <Typography className={classes.heightSet}>
                    {pName}
                </Typography>
                <Typography>
                $ {listPrice}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.display}>
            <Button size="small" color="primary" onClick={clickHandler}>
                Details
            </Button>
        </CardActions>
        </Card>
    </Grid>
  );
}