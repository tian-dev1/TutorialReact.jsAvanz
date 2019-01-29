import React from 'react';

import {
    BrowserRouter as ReactRouter, //Importamos el Router lo nombramos Router 
    Route //Nos sirve para especificar las rutas
}from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import App from './App';

export default class Router extends React.Component{
    render(){
        return(
            <ReactRouter>
                <App>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route> 
                </App>
            </ReactRouter>
        );
    }
}
