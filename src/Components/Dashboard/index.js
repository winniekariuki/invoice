import React, { Component } from 'react';
import Customers from '../Customers/index';
import './dashboard.css';
import Transactions from '../Transactions/index';
import TotalAmount from '../TotalAmountMonth/index'
import Navbar from '../Navbar/index'

class Dashboard extends React.Component {
     render() {
      return (
        <div className="container">
          <div className="Bar-chart">
            <Customers />
            </div>
         <TotalAmount />
         <Transactions/>
        </div>
      );
    }
  }

  export default Dashboard;
