import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import store from '../store';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    login = e => {
        e.preventDefault();
        AuthService.getAuthToken(this.state.email, this.state.password).then(
            res => this.props.updateToken(res.data.token)
        );
    };

    logout = e => {
        this.props.updateToken('');
    };

    validateToken = e => {
        AuthService.validateAuthToken().then(
            res => console.log(res)
        );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label>Email: </label>
                    <input type="email" name="email" onChange={this.onChange} value={this.state.email} />

                    <br/>

                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.onChange} value={this.state.password} />

                    <br/>

                    <input type="submit" value="Login" />
                    { store.getState().token ?
                        <div>
                            <input type="button" value="Logout" onClick={this.logout}/>
                            <input type="button" value="Validate" onClick={this.validateToken}/>
                        </div>
                        : null }
                </form>
            </div>
        )
    }

}

export default LoginForm;
