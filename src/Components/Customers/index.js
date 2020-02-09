import React, { Component } from 'react';
import Chart from "react-google-charts";
import { connect } from "react-redux";
import getTopCustomers from '../../actions/getCustomers'


class Customer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       isLoading: false,
    //       topCustomers : [],
    //     };
    // };
    componentDidMount() {
        this.props.getTopCustomers();
    }
    // componentWillReceiveProps(topCustomers) {
    //     this.setState({
    //       topCustomers: topCustomers.topCustomers,
    //       isLoading: true,
    //     });
    // }
    renderBarChartData() {
    }
    render() {

        const { customers } = this.props.topCustomers
        if (customers) {
            console.log(JSON.parse(customers), ">>>>")
        //    customers.map(customer => console.log(customer))
        }
      
  
   return (
       <div>
           {/* {   customers.map(customer => console.log(customer)) } */}
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
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
      ],
      
    ['Copper', 8.94, '#b87333', null],
    ['Silver', 10.49, 'silver', null],
    ['Gold', 19.3, 'gold', null],
    ['Platinum', 21.45, 'color: #e5e4e2', null],
               ]}
  options={{
    title: 'Top Five Customers/ due amount',
    width: 600,
    height: 400,
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
  }}
  // For tests
  rootProps={{ 'data-testid': '6' }}
/>
     </div>
   )
 }
}

export const mapStateToProps = state => ({
    topCustomers: state.customers,
  });
  export const mapDispatchToProps = dispatch => ({
    getTopCustomers: () => dispatch(getTopCustomers()),
    
  });
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
