import React from 'react';
import ReactDOM from 'react-dom';
export default class Documents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check_aadhaar: true,
            check_dl: false,
            check_voter_id: false,
            check_passport: false,
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="mt-3">
                    <h3 className="p-2">Co-Applicant's Address Proof</h3>
                    <div className="w-100"></div>
                    <div className="p-2">
                        <input type="checkbox" name="Earning" id="earning" onClick={() => this.setState({ check_aadhaar: true, check_dl: false, check_voter_id: false, check_passport: false })} checked={this.state.check_aadhaar} />
                        <label for="earning" className="ml-2">Aadhar</label>
                    </div>
                    <div className="p-2">
                        <input type="checkbox" name="Earning" id="earning" onClick={() => this.setState({ check_aadhaar: false, check_dl: true, check_voter_id: false, check_passport: false })} checked={this.state.check_dl} />
                        <label for="earning" className="ml-2">Driving Licence</label>
                    </div>
                    <div className="p-2">
                        <input type="checkbox" name="Earning" id="earning" onClick={() => this.setState({ check_aadhaar: false, check_dl: false, check_voter_id: true, check_passport: false })} checked={this.state.check_voter_id} />
                        <label for="earning" className="ml-2">Voter Id</label>
                    </div>
                    <div className="p-2">
                        <input type="checkbox" name="Earning" id="earning" onClick={() => this.setState({ check_aadhaar: false, check_dl: false, check_voter_id: false, check_passport: true })} checked={this.state.check_passport} />
                        <label for="earning" className="ml-2">Passport</label>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Front Page </span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Back Page </span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>

                </div>
                <div className="w-100"></div>
                <div className="mt-3">
                    <h3 className="p-2">Co-Applicant's Identity Proof</h3>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">PAN Upload </span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <button className="btn btn-primary">Upload</button>

            </React.Fragment>
        )
    }

}