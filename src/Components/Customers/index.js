import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import Dropdown from '../Dropdown/index'
import Base_url from '../base-url';



class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      barChartData: null,
      customers:null,
    };
   
  }
  componentDidMount() {
    axios.get('https://csv-parse.herokuapp.com/api/v1/top-customers-amount')
      .then(response => response)
      .then(year => {
        const data = year.data
        this.setState({customers: data })
      
      }
      )
    
  }
   
  render() {
    const { customers} = this.state
  if (customers){
    var year = 2020;
    var Customers = customers[year]
      }
  let output = []
  var colors =['#b87333', '#287333','#887333','#457f999','#c4598']

  for(let key in Customers){
      output.push([key, Customers[key]],) 
  }
  console.log(output,"output")
  output.map((item,index) => {
    item.push(colors[index])
    return item
  })   
  
  
   return (
<div className="bar-container">
<Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
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
