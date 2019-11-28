import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Link } from 'react-router-dom';
import Earning from "./Earning";
import NotEarning from "./Not_earning";
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked_earn: true,
            checked_not_earn:false,
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <h3 className="col-4 p-2">Student is</h3>
                        <div className="col-4 p-2">
                            <input type="radio" name="Earning" id="earning" onClick={()=>this.setState({checked_earn:true,checked_not_earn:false})} checked={this.state.checked_earn} />
                            <label for="earning" className="ml-2">Earning</label>
                        </div>
                        <div className="col-4 p-2">
                            <input type="radio" name="Not Earning" id="not_earning" checked={this.state.checked_not_earn} onClick={()=>this.setState({checked_earn:false,checked_not_earn:true})}/>
                            <label for="not_earning" className="ml-2">Not Earning</label>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.checked_earn ? <Earning /> : <NotEarning />}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}