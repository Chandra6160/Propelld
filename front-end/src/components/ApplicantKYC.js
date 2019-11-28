import React from 'react';
import ReactDOM from 'react-dom';
export default class ApplicantKYC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked_yes: true,
            checked_no: false,
        }
    }
    render() {
        return (
            <React.Fragment>

                <h3 className="p-2">Is Applicant's Aadhaar linked to a Mobile Number</h3>
                <div className="w-100"></div>
                <div className="p-2">
                    <input type="checkbox" name="Earning" id="earning" onClick={() => this.setState({ checked_yes: true, checked_no: false })} checked={this.state.checked_yes} />
                    <label for="earning" className="ml-2">Yes,Insta-KYC! Takes Just 3 minutes</label>
                </div>

                <div className="p-2">
                    <input type="checkbox" name="Not Earning" id="not_earning" checked={this.state.checked_no} onClick={() => this.setState({ checked_yes: false, checked_no: true })} />
                    <label for="not_earning" className="ml-2">No</label>
                </div>
                <div className="w-100"></div>
                {this.state.checked_yes ? (
                    <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Co-applicant's Aadhaar Linked Mobile</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.props.relation} />
                        </div>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Proceed to KYC verification
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Status</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setTimeout(() => this.props.nextPage(), 3000)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p className='text-center container'>
                                            <img className='mb-3 mt-4' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-check-mark-4.png' style={{ width: "100px" }} />
                                            <h1 >Congratulations!</h1>
                                            <h4 >KYC verification done.Redirecting you to application in 3 sec.</h4>
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setTimeout(() => this.props.nextPage(), 3000)}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>this.props.nextPage()}>
                                Proceed to KYC verification
                            </button>
                        </div>
                    )}

            </React.Fragment>
        )
    }

}