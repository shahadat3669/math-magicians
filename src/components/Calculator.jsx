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
    <section className="calculator">
      <h2 className="calculator__title">Let&#39;s do some math!</h2>
      <div className="calculator__container">
        <Display total={total} next={next} operation={operation} />
        <ButtonGrid clickHandler={clickHandler} />
      </div>
    </section>
  );
};

export default Calculator;
