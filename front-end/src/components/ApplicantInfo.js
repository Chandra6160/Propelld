import React from 'react';
import ReactDOM from 'react-dom';
export default class ApplicantInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={this.handleChange} value={this.props.ob.name} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">PAN number</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your age" onChange={this.handleChange} value={this.props.ob.pan} />
                    </div>
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
                    <button type="button" class="btn btn-primary" onClick={()=>this.props.nextPage()}>Continue</button>
                </div>
            </React.Fragment>
        )
    }

}