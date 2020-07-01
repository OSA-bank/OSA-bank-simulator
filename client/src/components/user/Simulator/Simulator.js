import React from 'react';
import './Simulator.css';

class Simulator extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>My Simulator</h1>
        <label>Choose Loan Type</label>
        <div className="box">
          <select>
            <option>Car</option>
            <option>Home</option>
            <option>Studies</option>
          </select>
        </div>
        <label>Amount</label>
        <div>
          <input
            className="amount"
            type="number"
            step="1000"
            placeholder="Type The Amount"
          ></input>
        </div>
        <label>Number Of Years</label>
        <div>
          <input
            className="amount"
            type="number"
            placeholder="Number Of Years"
          ></input>
        </div>
        <label>Repayment Frequency</label>
        <div className="box">
          <select>
            <option>3</option>
            <option>6</option>
            <option>9</option>
          </select>
        </div>
        <button className="calculate">Calculate</button>
      </div>
    );
  }
}

export default Simulator;
