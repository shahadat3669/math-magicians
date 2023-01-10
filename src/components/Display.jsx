import { Component } from 'react';

class Display extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="display">
        <div className="display__inner">0123</div>
      </div>
    );
  }
}
export default Display;
