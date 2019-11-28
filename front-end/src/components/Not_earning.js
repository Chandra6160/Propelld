import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from "./NotEarningFirst";
import Congrats from "./Congrats";
import NotEarningFirst from "./NotEarningFirst";
import CoApplicantKYC from "./CoApplicantKYC";
import CoapplicantInfo from "./CoapplicantInfo";
import Documents from "./Documents";
export default class NotEarning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step_count: 1,
            pan: "",
            relation: "",
            age: "",
        }
    }
    secondPage = (pan, relation, age) => {
        this.setState({
            step_count: this.state.step_count + 1,
            pan,
            relation,
            age,
        })
    }
    nextPage = () => {
        this.setState({
            step_count: this.state.step_count + 1
        })
    }
    render() {
        switch (this.state.step_count) {
            case 1:
                return (
                    <React.Fragment>
                        <FirstPage secondPage={this.secondPage} />
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                        <CoapplicantInfo relation={this.state.relation} pan={this.state.pan} nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 3:
                return (
                    <React.Fragment>
                        <Congrats nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 4:
                return (
                    <React.Fragment>
                        <CoApplicantKYC nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 5:
                return (
                    <React.Fragment>
                        <Documents  />
                    </React.Fragment>
                )
            default:
                return (
                    <React.Fragment>
                        <FirstPage secondPage={this.secondPage} />
                    </React.Fragment>

                )
        }
    }

}

