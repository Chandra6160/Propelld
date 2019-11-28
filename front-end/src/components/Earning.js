import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from "./EarningFirst";
import Congrats from "./Congrats";
import NotEarningFirst from "./NotEarningFirst";
import CoApplicantKYC from "./CoApplicantKYC";
import CoapplicantInfo from "./CoapplicantInfo";
import Documents from "./Documents";
import ApplicantInfo from "./ApplicantInfo";
import ApplicantKYC from "./ApplicantKYC";
export default class Earning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step_count: 1,
            pan: "",
            relation: "",
            age: "",
            arr: [],
            ob: {}
        }
    }
    nextPage = () => {
        this.setState({
            step_count: this.state.step_count + 1
        })
    }
    secondPage = (pan, relation, age) => {
        this.setState({
            step_count: this.state.step_count + 1,
            pan,
            relation,
            age,
        })
    }
    eligible = (pan, name, dob) => {
        console.log(pan, name, dob)
        let obj = {
            pan,
            name,
            dob,
        }
        this.setState({
            step_count: this.state.step_count + 6,
            ob: obj
        })
    }
    render() {
        switch (this.state.step_count) {
            case 1:
                return (
                    <React.Fragment>
                        <FirstPage nextPage={this.nextPage} eligible={this.eligible} />
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                        <NotEarningFirst secondPage={this.secondPage} />
                    </React.Fragment>
                )
            case 3:
                return (
                    <React.Fragment>
                        <CoapplicantInfo relation={this.state.relation} pan={this.state.pan} nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 4:
                return (
                    <React.Fragment>
                        <Congrats nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 5:
                return (
                    <React.Fragment>
                        <CoApplicantKYC nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 6:
                return (
                    <React.Fragment>
                        <Documents />
                    </React.Fragment>
                )
            case 7:
                return (
                    <React.Fragment>
                        <ApplicantInfo ob={this.state.ob} nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 8:
                return (
                    <React.Fragment>
                        <ApplicantKYC nextPage={this.nextPage} />
                    </React.Fragment>
                )
            case 9:
                return (
                    <React.Fragment>
                        <Documents />
                    </React.Fragment>
                )
            default:
                return (
                    <React.Fragment>
                        <FirstPage nextPage={this.nextPage} />
                    </React.Fragment>

                )
        }
    }

}

