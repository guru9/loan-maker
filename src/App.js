import React, { Component } from 'react';
import Loan from './components/loan';
import Period from './components/period';
import Payment from './components/payment';

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loanValue: 500,
      monthValue: 6,
      loanInterest: 0,
      rateOfInterest: 10,
      monthlyPayment: 0
    }
  }

  handleChangeStart = () => {
  };

  handleChangeLoan = value => {

    this.setState({
      loanValue: value,
      loanInterest: (this.state.loanValue * (this.state.rateOfInterest / 100) * (this.state.monthValue / 12)).toFixed(2),
    })
  };

  handleChangeMonth = value => {
    this.setState({
      monthValue: value,
      loanInterest: (this.state.loanValue * (this.state.rateOfInterest / 100) * (this.state.monthValue / 12)).toFixed(2),
    })
  };

  handleChangeComplete = () => {
    const { loanInterest, loanValue, monthValue } = this.state
    let res = (loanValue + parseInt(loanInterest))
    const payment = (res / monthValue).toFixed(2)
    this.setState({
      monthlyPayment: payment
    })
  };

  render() {
    const { loanValue, monthValue, monthlyPayment, loanInterest, rateOfInterest } = this.state
    return (
      <div className="App">
        <Loan value={loanValue} onChangeStart={this.handleChangeStart}
          onChange={this.handleChangeLoan}
          onChangeComplete={this.handleChangeComplete}>
          {loanValue}
        </Loan>

        <Period value={monthValue}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChangeMonth}
          onChangeComplete={this.handleChangeComplete}>
          {monthValue}
        </Period>

        <Payment monthlyPayment={monthlyPayment}>{loanValue} {monthValue} {loanInterest} {rateOfInterest} </Payment>
      </div>
    )
  }
}

export default App;
