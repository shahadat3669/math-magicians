import { Component } from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
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
