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

  clickHandler = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(this.state, data);
    this.setState(result);
  };

  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonGrid clickHandler={this.clickHandler} />
      </div>
    );
  }
}
export default Calculator;
