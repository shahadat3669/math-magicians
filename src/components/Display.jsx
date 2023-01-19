import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next, operation } = props;

  return (
    <div className="display">
      <div className="display__inner">
        {total}
        {operation}
        {next}
      </div>
    </div>
  );
};

export default Display;

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
