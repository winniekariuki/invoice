import React, { Component } from 'react';
import Chart from "react-google-charts";
import { connect } from "react-redux";
import getTotalAmount from "../../actions/getTotalAmount";



class TotalAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          totalAmount : [],
        };
    };
    componentDidMount() {
        this.props.getTotalAmount();
    }
    componentWillReceiveProps(totalAmount) {
        this.setState({
          totalAmount: totalAmount.totalAmount,
          isLoading: true,
        });
    }
    
    renderTableData() {
    console.log(this.state,">>>")

        // return this.state.students.map((student, index) => {
        //    const { id, name, age, email } = student //destructuring
        //    return (
        //       <tr key={id}>
        //          <td>{id}</td>
        //          <td>{name}</td>
        //          <td>{age}</td>
        //          <td>{email}</td>
        //       </tr>
        //    )
        // })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    render() {
     console.log(this.state,"hey>>")
   return (
       <div>
             <table id='students'>
               {/* <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody> */}
            </table>
     </div>
   )
 }
}

export const mapStateToProps = state => ({
    totalAmount: state.totalAmount.totalAmount,
  });
  export const mapDispatchToProps = dispatch => ({
    getTotalAmount: () => dispatch(getTotalAmount()),
    
  });
  export default connect(mapStateToProps, mapDispatchToProps)(TotalAmount);
