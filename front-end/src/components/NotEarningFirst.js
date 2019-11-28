import React from 'react';
import ReactDOM from 'react-dom';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: "",
            relation: "",
            age: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>

                <div className="row bg-light text-black mx-4 rounded-pill">
                    <p className="px-4 py-3 align-center lead"><span><i class="fas fa-exclamation-triangle"></i></span> We Will be needing a Co-applicant for your loan application in the next step.</p>
                </div>
                <div className="w-100"></div>
                <div className="row mx-4 py-4">
                    <form class="justify-content-center">
                        <div class="form-group">
                            <label for="exampleInputEmail1">PAN No</label>
                            <input type="text" name="pan" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your PAN number" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Relationship</label>
                            <input type="text" name="relation" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Relationship" onChange={this.handleChange} />
                        </div>
                        {/* <div class="form-group">
                            <label for="exampleInputEmail1">Age</label>
                            <input type="email" name="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your age" onChange={this.handleChange} />
                        </div> */}
                        <button type="button" class="btn btn-primary" onClick={() => this.props.secondPage(this.state.pan, this.state.relation, this.state.age)}>Proceed to Co-applicant Information</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

}