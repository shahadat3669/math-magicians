import { Component } from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonGrid />
      </div>
    );
  }
}
export default Calculator;
