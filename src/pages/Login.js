import React from 'react';
import Title from '../components/Title'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

import Container from '../components/Container';

export default class Login extends React.Component{
    render(){
        return(
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{'textAlign':'left'}}>  
                            <Title/>
                            <TextField floatingLabelText= "Correo electronico*" required
                            type="email"
                            className="textfield"
                            />
                            <TextField floatingLabelText= "Contraseña*" required
                            type="password"
                            className="textfield"
                            />
                            <div className="Login-actions">
                                <RaisedButton label="Ingresar" primary={true} />
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="Login-background" style={{'backgroundImage': "url("+'images/login.jpeg'+")"}}></div>
                </div>

            </div>
        )
    }
}