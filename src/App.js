// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import NoMatch from './components/NoMatch';

import Layout from './components/Layout';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
