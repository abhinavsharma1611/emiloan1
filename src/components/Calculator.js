import React, { Component } from "react";
import { connect } from 'react-redux';
import InputRange from "react-input-range";
import Display from "./Display";
import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";
import Logoft from "./ftlabs.png";

import { triggerFetchAPR } from './../redux/actions/appActions';
class Calculator extends Component {
  state = {
    amountValue: 500,
    monthsNum: 6,
    interestRate: .25,
    monthlyPayment: 112,
    numPayments: 0,
    principal: 0
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
    this.props.triggerFetchAPR(value, this.state.monthsNum)
  };
  handleYearChange = value => {
    this.setState({ monthsNum: value });
    this.props.triggerFetchAPR(this.state.amountValue, value)
  
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(JSON.stringify(prevState.dataAPR)!==JSON.stringify(nextProps.dataAPR)){
      return{
        dataAPR:nextProps.dataAPR,
        interestRate: nextProps.dataAPR.interestRate,
        monthlyPayment: nextProps.dataAPR.monthlyPayment.amount,
        numPayments: nextProps.dataAPR.numPayments,
        principal: nextProps.dataAPR.principal.amount
      }
    }
    return{

    }
  }

  render() {
    const { 
      amountValue,
      monthsNum,
      interestRate,
      monthlyPayment,
      numPayments,
      principal
    } = this.state;
    console.log(
      interestRate,
      monthlyPayment,
      numPayments,
      principal
    );
    return (
      
      <div className="App">
        <h1>FULLTHROTTLE  LABS</h1>
        <img src={Logoft} alt="A LOGO"></img>
        <h3>EMI Calculator</h3>
       <h4>Loan Amount ${amountValue}</h4>
        <InputRange
          step={100}
          maxValue={5000}
          minValue={500}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Duration- {monthsNum} month's
        </h4>
        <InputRange
          step={1}
          maxValue={24}
          minValue={6}
          value={monthsNum}
          onChange={this.handleYearChange}
        />
        <Display interestRate={interestRate} monthlyPayment={monthlyPayment}   />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataAPR: state.appData.dataAPR,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    triggerFetchAPR: (amount,months) => dispatch(triggerFetchAPR(amount,months))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
