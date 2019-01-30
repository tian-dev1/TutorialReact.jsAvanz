import React from 'react';

import {
    BrowserRouter as ReactRouter, //Importamos el Router lo nombramos Router 
    Route //Nos sirve para especificar las rutas
}from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import App from './App';



const UserSignedIn = true;
export default class Router extends React.Component{
//Rutas que se acceden con permiso 
    
    signedInRoutes(){
        if(true){
            return(
                <Route path="/new" render={()=> <h1>Bienvenido</h1> } />
            );
        }
    }

    home(){
        if(UserSignedIn) return Home;
        return Dashboard;
    }

    render(){
        return(
            <ReactRouter>
                <App>
                    <Route exact path="/" component={this.home()}></Route>
                    <Route path="/login" component={Login}></Route> 
                    <Route path="/signup" component={Login}></Route> 
                    {this.signedInRoutes()}
                </App>
            </ReactRouter>
        );
    }
}
