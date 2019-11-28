import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
export default class CoapplicantInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: "",
            dob: "",
            father_name: "",
            name: "",
            checked: false,
            monthly_income: "",
            emi: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fetch_pan = () => {
        axios({
            method: 'POST',
            url: 'http://localhost/hack/2019/verification/pan/fetch',
            data: { "PANNumber": this.state.pan },
        })
            .then((response) => {
                let date = response.data.PayLoad.DateOfBirth.split("/")
                let age = 2019 - Number(date[2])
                this.setState({
                    dob: age,
                    name: response.data.PayLoad.Name,
                    father_name: response.data.PayLoad.FatherName,
                    pan: response.data.PayLoad.PANNumber,
                })
            })
            .catch((err) => {
                alert(err)
                this.setState({
                    dob: 23,
                    name: "SIDDARAMA V",
                    father_name: "HANUMANTHAPPA",
                    pan: "AYKPV3479Q",
                })
            })
    }
    componentDidMount() {
        this.fetch_pan()
    }
    check_eligibility = () => {
        if (Number(this.state.emi) < ((50 / 100) * Number(this.state.monthly_income))) {
            this.props.nextPage()
        }
        else {
            alert("You are not elegible");
            alert("you have to fill co-applicant details");
            this.props.nextPage()
        }
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="justify-content-center">Co-Applicant Basic Information</h2>
                <div className="row mx-4 py-4">
                    <form class="justify-content-center">

                        <div class="form-group">
                            <label for="exampleInputEmail1">Relationship with Co-applicant</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.props.relation} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-Applicant's PAN Number</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={this.handleChange} value={this.state.pan} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-Applicant's Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your age" onChange={this.handleChange} value={this.state.name} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-applicant's Age</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your age" onChange={this.handleChange} value={this.state.dob} />
                        </div>



                        <div class="form-group">
                            <label for="exampleInputEmail1">Employment Type</label>
                            <input type="text" name="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Salaried or Not?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Profession is </label>
                            <input type="text" name="profession" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Co-Applicant's profession?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-Applicant is earning for </label>
                            <input type="text" name="earning_years" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How many years?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-Applicant is working at </label>
                            <input type="text" name="working" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="which company?" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-Applicant's Monthly Income </label>
                            <input type="text" name="monthly_income" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How much salary per month?" onChange={this.handleChange} />
                            <small id="emailHelp" class="form-text text-muted">* Please note that this will be verified from your bank statement</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-Applicant's Monthly EMI of </label>
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