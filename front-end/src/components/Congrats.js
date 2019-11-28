import React from 'react';
import ReactDOM from 'react-dom';
export default class Congrats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="justify-content-center">Status</h2>
                <div>
                    <p className='text-center container'>
                        <img className='mb-3 mt-4' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-check-mark-4.png' style={{ width: "100px" }} />
                        <h1 >Congratulations!</h1>
                        <h4 >You staisfy our minimum eligibility criteria for loan processing. Please complete your KYC and
                    document verfication process to complete the loan application.</h4>
                    </p>
                    <button type="button" className="btn btn-primary" onClick={()=>this.props.nextPage()}>Continue</button>
                </div>
            </React.Fragment>
        )
    }

}