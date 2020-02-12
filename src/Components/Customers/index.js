import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@progress/kendo-react-dropdowns';


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
        this.setState({customers: data })
      
      }
      )
    
  }
  sizes = [ "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large" ];
  state = {
      value: null
  };

  handleChange = (event) => {
      this.setState({
          dateSelect: event.target.value
      });
  }
   
  render() {
    const { customers} = this.state
    if (customers) {
  
  var options = Object.keys(customers)
      var Customers = customers[this.state.dateSelect]
      }
  var  output = []
  var colors =['#b87333', '#287333','#887333','#457f999','#c4598']

  for(var key in Customers){
      output.push([key, Customers[key]],) 
  }
  output.map((item,index) => {
    item.push(colors[index])
    return item
  })   

  
    return (
     <div className="bar-container">
   <div className="col-xs-12 col-sm-7 example-col">
                    <p>DropDownList</p>
             <DropDownList data={options}  onChange={this.handleChange} defaultValue={this.state.dateSelect} />
                </div>
 
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
