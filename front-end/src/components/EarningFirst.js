import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: "",
            dob: "",
            father_name: "",
            name: "",
            checked: false,
            monthly_income:"",
            emi:"",

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    check_pan = () => {
        axios({
            method: 'POST',
            url: 'http://localhost/hack/2019/verification/pan/fetch',
            data: { "PANNumber": this.props.pan },
        })
            .then((response) => {
                let date = response.data.PayLoad.DateOfBirth.split("/")
                let age = 2019 - Number(date[2])
                this.setState({
                    dob: age,
                    name: response.data.PayLoad.Name,
                    father_name: response.data.PayLoad.FatherName,
                    pan: response.data.PayLoad.PANNumber,
                    checked: true,
                })
            })
            .catch((err) => {
                alert(err)
                this.setState({
                    dob: 23,
                    name: "CHANDRASHEKHARA VADDARA",
                    father_name: "SIDDARAMA V",
                    pan: "AYKPV3479Q",
                    checked: true
                }
                )
            })
    }
    check_eligibility =()=>{
        if(Number(this.state.emi)<((50/100)*Number(this.state.monthly_income))){
            this.setState({
                pan:this.state.pan,
                name:this.state.name,
                dob:this.state.dob
            },()=>this.props.eligible(this.state.pan,this.state.name,this.state.dob))
            
        }
        else{
            alert("You are not elegible");
            alert("you have to fill co-applicant details");
            this.props.nextPage()
        }
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="justify-content-center">Applicant Basic Information</h2>
                <div className="row mx-4 py-4">
                    <form class="justify-content-center">
                        <div class="form-group">
                            <label for="exampleInputEmail1">PAN No</label>
                            <input type="text"  name="pan" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your PAN number" onChange={this.handleChange} />
                            <button className="btn btn-primary mt-2" type="button" onClick={this.check_pan}>check PAN number</button>
                        </div>
                        {this.state.checked ? (
                            <div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={this.handleChange} value={this.state.name} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Father Name</label>
                                    <input type="text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={this.handleChange} value={this.state.father_name} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Age</label>
                                    <input type="text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your age" onChange={this.handleChange} value={this.state.dob} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">PAN number</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your age" onChange={this.handleChange} value={this.state.pan} />
                                </div>
                            </div>

                        ) : null}

                        <div class="form-group">
                            <label for="exampleInputEmail1">I am a</label>
                            <input type="text" name="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Salaried or Not?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">My Profession is </label>
                            <input type="text" name="profession" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your profession?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">I have been earning for </label>
                            <input type="text" name="earning_years" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How many years?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">I am working at </label>
                            <input type="text" name="working" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="which company?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">I have a Monthly Income of  </label>
                            <input type="text" name="monthly_income" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How much salary per month?" onChange={this.handleChange} />
                            <small id="emailHelp" class="form-text text-muted">* Please note that this will be verified from your bank statement</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Currently paying EMI of </label>
                            <input type="text" name="emi" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How much your are Paying EMI?" onChange={this.handleChange} />
                            <small id="emailHelp" class="form-text text-muted">* Please note that this will be verified from your CIBIL and bank statement</small>
                        </div>
                        <button type="button" class="btn btn-primary" onClick={this.check_eligibility}>Check Eligibility</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

}