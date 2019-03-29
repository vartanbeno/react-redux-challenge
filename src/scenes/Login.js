import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

const style = {
    marginTop: '4rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
};

class Login extends Component {

    render() {
        return (
            <div style={style}>
                <LoginForm updateToken={this.props.updateToken}/>
            </div>
        )
    }

}

export default Login;
