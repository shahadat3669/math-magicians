import { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Calculator />
      </main>
    );
  }
}
export default App;
