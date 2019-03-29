import React, { Component } from 'react';
import './App.css';
import { updateToken } from './actions/tokenActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './scenes/Login';

class App extends Component {
    render() {
        return (
            <Router>

                <Route exact path="/" render={props => (
                    <div className="App">
                        <h1>Hello</h1>
                    </div>
                )}/>

                <Route exact path="/login" render={props => (
                    <Login updateToken={this.props.updateToken}/>
                )}/>

            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

const mapActionsToProps = {
    updateToken: updateToken
};

export default connect(mapStateToProps, mapActionsToProps)(App);
