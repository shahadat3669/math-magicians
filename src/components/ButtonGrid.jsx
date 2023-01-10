import { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { clickHandler } = this.props;
    return (
      <div className="key-grid">
        <button type="button" className="button" onClick={clickHandler}>
          AC
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          +/-
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          %
        </button>
        <button
          type="button"
          className="button button--orange"
          onClick={clickHandler}
        >
          ÷
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          7
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          8
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          9
        </button>
        <button
          type="button"
          className="button button--orange"
          onClick={clickHandler}
        >
          x
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          4
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          5
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          6
        </button>
        <button
          type="button"
          className="button button--orange"
          onClick={clickHandler}
        >
          -
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          1
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          2
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          3
        </button>
        <button
          type="button"
          className="button button--orange"
          onClick={clickHandler}
        >
          +
        </button>
        <button
          type="button"
          className="button button--zero"
          onClick={clickHandler}
        >
          0
        </button>
        <button type="button" className="button" onClick={clickHandler}>
          .
        </button>
        <button
          type="button"
          className="button button--orange"
          onClick={clickHandler}
        >
          =
        </button>
      </div>
    );
  }
}
export default ButtonGrid;

ButtonGrid.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
