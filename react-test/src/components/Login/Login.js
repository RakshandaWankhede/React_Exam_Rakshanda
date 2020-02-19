import React, {useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Redirect } from 'react-router-dom'
import loginStyle from './loginStyle'
import {loginToSite} from '../../actions/loginAction'
import { useDispatch, useSelector } from 'react-redux';
import { withToastManager, useToasts } from 'react-toast-notifications'



const useStyles = makeStyles(loginStyle);

const Login =()=>{
  const classes = useStyles();
  const [email,setEmail] = useState('');
  const [password,setPassword]  = useState('');
  const dispatch = useDispatch();
  const userData = useSelector(state=>state.loginReducer.userData);
  const error = useSelector(state=>state.loginReducer.error);
  const { addToast } = useToasts(); 

  useEffect(()=>{
      if(error)
   { addToast(error, { appearance: 'error', autoDismiss: true });}
  },[error,addToast])
  const handleSubmit =()=>{
      const data = {
        "username":email,
        "password":password
      }
      dispatch(loginToSite(data));
  }
  const changeHandler =(e)=>{
        if(e.target.name ==='email')
            setEmail(e.target.value);
        else
            setPassword(e.target.value);
  }

  return (
    <div>
    {userData ? <Redirect  from= '/login' to="/ProductListing" /> : false}
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange ={changeHandler}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange ={changeHandler}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleSubmit}
          >
            Sign In
          </Button>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default withToastManager(Login);