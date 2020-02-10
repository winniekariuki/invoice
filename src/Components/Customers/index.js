import React, { Component } from 'react';
import Chart from "react-google-charts";
import axiosConfig from '../../axios';



class Customer extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.value),
          backgroundColor: this.props.color
        }]
      }
    });
    axiosConfig.get('http://')
  }
 
  render() {
   return (
       <div>
        <canvas ref={this.chartRef} />
     </div>
   )
 }
}

export default Customer;
