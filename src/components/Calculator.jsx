import { useState } from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';
import calculate from './logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const clickHandler = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(calculatorData, data);
    setCalculatorData(result);
  };
  const { total, next, operation } = calculatorData;
  return (
    <div className="calculator">
      <Display total={total} next={next} operation={operation} />
      <ButtonGrid clickHandler={clickHandler} />
    </div>
  );
};

export default Calculator;
