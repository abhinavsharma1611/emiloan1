import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
    render() {
    return (
        <div className="flex">
        <DisplayChild value={this.props.interestRate+"%"}  text="Interest Rate" />
        <DisplayChild
          value={"$"+this.props.monthlyPayment}
          text=" Monthly Payment"
        />
        </div>
        );
    }
 }

Display.propTypes = {
  months: PropTypes.number,
  amount: PropTypes.number
};

export default Display;
