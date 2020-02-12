import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import 'react-dropdown/style.css'
import { DropDownList } from '@progress/kendo-react-dropdowns';
import './customer.css'

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartData: null,
      customers: null,
      dateSelect: 2020
    };

  }
  componentDidMount() {
    axios.get('https://csv-parse.herokuapp.com/api/v1/top-customers-amount')
      .then(response => response)
      .then(year => {
        const data = year.data
        this.setState({ customers: data })

      }
      )

  }

  //updates the bar chart year
  handleChange = (event) => {
    this.setState({
      dateSelect: event.target.value
    });
  }

  render() {
    const { customers } = this.state
    if (customers) {
      var options = Object.keys(customers) // gets the number of years
      var Customers = customers[this.state.dateSelect] //  retrieves top customers according to the year passed
    }
    var output = []
    var colors = ['#00008B', '#0000CD', '#0000FF', '#6495ED', '#ADD8E6']

    for (var key in Customers) {
      output.push([key, Customers[key]]) // formats top five customers into an array to map the data in the bar chart
    }
    output.map((item, index) => {
      item.push(colors[index]) // maps colors into the array
      
      return item
    })

    return (
      <div>
        <div className="dropdown">
          <DropDownList data={options} onChange={this.handleChange} defaultValue={this.state.dateSelect} />
        </div>

        <Chart
         className="bar-chart"
          chartType="BarChart"
          loader={<div className="loading">Loading Chart</div>}
          data={[
            [
              'Element',
              'Density',
              { role: 'style' },
            ],
            output[0],
            output[1],
            output[2],
            output[3],
            output[4]

          ]}

          options={{
            title: 'Top Five Customers/ due amount',
            width: 600,
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
          }}

          rootProps={{ 'data-testid': '6' }}
        />
      </div>
    )
  }
}

export default Customers;
