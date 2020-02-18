import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import store from './store'
import './index.css';
import Login from "./layouts/Login/Login";
import ProductListing from "./layouts/ProductListing/ProductListing"
import Header from "./components/Header/Header"
import PDP from "./layouts/PDP/PDP"
import * as serviceWorker from './serviceWorker';

const history =createBrowserHistory();
ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Header></Header>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/ProductListing" component={ProductListing} />
                    <Route path="/Product" component={PDP} />
                    <Redirect from="/" to="/login"></Redirect>
                </Switch>
            </Router>
        </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
