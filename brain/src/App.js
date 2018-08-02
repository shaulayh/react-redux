import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './component/details';
import axios from 'axios';
import {submitForm} from "./actions";

import {connect} from 'react-redux';

class App extends Component {

    submit = (values) => {
        axios.put('/api/contacts', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            date: values.date
        })
            .then(function (response) {
            })
            .catch(function (error) {

            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container">
                    <Details message="Form builder" onSubmit={this.submit}/>
                </div>

            </div>
        );
    }
}

export default connect(null, {submitForm})(App);