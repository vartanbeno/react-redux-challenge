import React, { Component } from 'react';
import './App.css';
import { updateToken } from './actions/tokenActions';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

const mapActionsToProps = {
    onUpdateToken: updateToken
};

export default connect(mapStateToProps, mapActionsToProps)(App);
