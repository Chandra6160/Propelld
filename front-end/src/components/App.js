import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Link } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar"
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Route  path="/" component={Home}></Route>
            </React.Fragment>
        )
    }

}