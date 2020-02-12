import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import Dropdown from '../Dropdown/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './transactions.css';
import moment from 'moment';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      startDate: new Date(),
    };

  }
  componentDidMount() {

  }
  updateDate = newDate => {
    axios.get(`https://csv-parse.herokuapp.com/api/v1/invoice?date=${newDate}`)
      .then(response => response)
      .then(data => {
        const lineData = [['x', 'amount']];
        const { data: transactions } = data;
        transactions.forEach(trans => {
          const date = moment(trans.invoice_date).format("DD/MM/YYYY");
          const amount = trans.total;
          lineData.push([date, amount])
        })
        this.setState({ transactions: lineData })

      }
      )
  }
  handleChange = date => {

    this.setState({
      startDate: date,
    });

    const newDate = moment(date).format("DD/MM/YYYY")
    this.updateDate(newDate)
  };


  render() {
    const { transactions } = this.state
    const bolton = typeof [transactions] === 'object' ? [] : transactions

    return (
      <div className="line-chart">
        <div className="chart-container"></div>
        <div className="date-picker">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat='dd MMM yyyy'
          />

        </div>

        <div className="chart">
          {transactions.length > 1 ? (
            <Chart
              width={'800px'}
              height={'400px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={
                transactions
              }
              options={{
                hAxis: {
                  title: 'Date',
                },
                vAxis: {
                  title: 'Transaction',
                },
              }}
              rootProps={{ 'data-testid': '1' }}
            />
          ) : 
              <div class="card-body text-center">
                <p class="card-text">No transactions that took place on this date. Kindly pick another date</p>
            </div>}

        </div>
      </div>
    )
  }
}

export default Transactions;
