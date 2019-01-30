import React from 'react';
import Title from '../components/Title'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
    BrowserRouter as ReactRouter,
    Link,
    Route
} from 'react-router-dom';

import Container from '../components/Container';

export default class Login extends React.Component{
    render(){
        return(
            
                <div className="row middle-xs">
                    <div className="col-xs-12 col-sm-6">
                        <Container>
                            <div style={{'textAlign':'left'}}>  
                                <Title/>
                                <TextField floatingLabelText= "Nombre de usuario*" required
                                type="text"
                                className="textfield"
                                />
                                <TextField floatingLabelText= "Contraseña*" required
                                type="password"
                                className="textfield"
                                />
                                
                                <div className="Login-actions">
                                    <Route path="/login" exact render={() => {
                                        return(
                                            <div>
                                                <Link to="/signup" style={{marginRight:"1em"}}>Crear nueva cuenta</Link>
                                                <RaisedButton label="Ingresar" primary={true} />
                                            </div>
                                        );      
                                    }}></Route>
                                    <Route path="/signup" exact render={() => {
                                        return(
                                            <div>
                                                <TextField floatingLabelText= "Correo electronico*" required
                                                type="email"
                                                className="textfield"
                                                />
                                                <Link to="/login" style={{marginRight:"1em"}}>Ya tengo cuenta</Link>
                                                <RaisedButton label="Crear cuenta" primary={true} />
                                            </div>
                                        );      
                                    }}></Route>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div>
                            <Route path="/login" exact render={() => 
                                <div className="Login-background" style={{'backgroundImage': "url("+'images/imagen4.jpeg'+")"}}></div>
                            }></Route>
                            <Route path="/signup" exact render={() => 
                                <div className="Login-background" style={{'backgroundImage': "url("+'images/login.jpeg'+")"}}></div>
                            }></Route>
                        </div>
                    </div>
                </div>
            
        )
    }
}