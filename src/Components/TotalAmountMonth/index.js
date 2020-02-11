import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './totalAmountMonth.css';

class TotalAmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      totalAmount: [],
    };
  };
  componentDidMount() {
    axios.get(`https://csv-parse.herokuapp.com/api/v1/monthly-total`)
      .then(response => response)
      .then(amount => {

        const data = amount.data

        this.setState({ totalAmount: 
          this.sortDate(data) })
       
      }
      )

  }
 
sortDate = (dates) => {
  const monthNames = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
  };
  Object.keys(dates).map(year => {
    const unordered = dates[year];
    const result = Object.keys(unordered).map((key) => {
    return [key, unordered[key]];
  });
  
  const sortedResult = result.sort(function(a, b) {
    // sort based on the value in the monthNames object
    return monthNames[a[0]] - monthNames[b[0]];
  });
  
  const singleYear = {};
  sortedResult.forEach(element => {
    singleYear[element[0]] = element[1];
  })
  
  dates[year] = singleYear;
  console.log(singleYear, 'result')
  
  })
  return dates
  }

  renderYearRow(year, monthData) {
    if(monthData){
    const rowData = [];
    Object.keys(monthData).forEach(month => {
      rowData.push([month, monthData[month]])
    })
    return(
      <Fragment>
      <tr>
      <td rowSpan={rowData.length}>{year}</td>
      <td>{rowData[0][0]}</td>
      <td>{rowData[0][1]}</td>
      </tr>
      {rowData.slice(1).map((row, index) => 
        ( <tr key={`${index}-${year}`}> 
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          </tr>
          )
        )}
      </Fragment>
    )
    }
  }

  render() {
    const {totalAmount} = this.state;
    console.log(totalAmount,"total amount")
    return (
      <div className="table-container">
        <table>
          <thead>
          <tr>
          <th>Year</th>
          <th>Month</th>
          <th>Totals</th>
          </tr>
          </thead>
          <tbody>
            {Object.keys(totalAmount).map(year => 
              {
                return <Fragment key={`${year}-${totalAmount[year]}`}>
                  {this.renderYearRow(year, totalAmount[year])}
                </Fragment>
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TotalAmount;
