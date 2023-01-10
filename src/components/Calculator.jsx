import { Component } from 'react';
import Display from './Display';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Display />
      </div>
    );
  }
}
export default Calculator;
