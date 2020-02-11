import React, { Component } from 'react';
import Customers from '../Customers/index';
import './dashboard.css';
import Transactions from '../Transactions/index';
import TotalAmount from '../TotalAmountMonth/index'
import Navbar from '../Navbar/index'

class Dashboard extends React.Component {
   

    render() {
        console.log(this.props,"render")
      return (
        <div className="container">
         <Customers/>
         <TotalAmount />
         <Transactions/>
        </div>
      );
    }
  }

  export default Dashboard;