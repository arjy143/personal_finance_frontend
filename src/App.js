import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/navbar.js';

const Dashboard = () => <h2>Dashboard</h2>;
const MakeTransaction = () => <h2>Make Transaction</h2>;
const Budgets = () => <h2>Budgets</h2>;
const Reports = () => <h2>Reports</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Dashboard} />
          <Route path="/make-transaction" component={MakeTransaction} />
          <Route path="/budgets" component={Budgets} />
          <Route path="/reports" component={Reports} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
