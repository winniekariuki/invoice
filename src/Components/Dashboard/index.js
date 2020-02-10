import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import { connect } from "react-redux";
import getTopCustomers from "../../actions/getCustomers";
import Customer from '../Customers';

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        customers:null,
      };
    }
  
    componentDidMount(){
        this.props.getTopCustomers();
        console.log(this.props.customers,"NNN")
    }

    render() {
        console.log(this.props,"render")
      return (
        <div className="App">
          <Customer
            data={this.state}
            title={this.state}
            color="#70CAD1"
          />
        </div>
      );
    }
  }

export const mapStateToProps = state => ({
    customers: state.customers,
  });
  export const mapDispatchToProps = dispatch => ({
    getTopCustomers: () => dispatch(getTopCustomers()),
    
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);