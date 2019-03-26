import React from 'react'

const Payment = (props) => {

    return (
        <div className="monthly-payment">
            <div className="payment-price">
                <span>Monthly Payment</span><span className="price">${props.monthlyPayment}</span>
            </div>
            <div className="payment-details">
                <div className="row">
                    <div>
                        <span>Loan Amount</span> &nbsp;&nbsp;<span>${props.children[0]}</span>
                    </div>
                    <div>
                        <span>Loan Period</span>&nbsp;&nbsp; <span>{props.children[2]}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Loan Interest</span>&nbsp;&nbsp;<span>${props.children[4]}</span>
                </div>
                <div>
                    <span>Rate of Interest</span>&nbsp;&nbsp;<span>${props.children[8]}</span>
                </div>
            </div>
        </div>
    )
}

export default Payment