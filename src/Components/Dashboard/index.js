import React, { Component } from 'react';
import Customers from '../Customers/index';
import './dashboard.css';
import Transactions from '../Transactions/index';
import TotalAmount from '../TotalAmountMonth/index'

class Dashboard extends React.Component {
     render() {
      return (
        <div className="container">
          <div className="card-chart">
            <Customers />
          </div>
          <div className="card-table">
            <TotalAmount />
          </div>
          <div className="card-line">
            <Transactions />
            </div>
        </div>
      );
    }
  }

  export default Dashboard;
