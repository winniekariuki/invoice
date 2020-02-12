import React, { Component } from 'react';
import './landingpage.css';
import CSVReader from 'react-csv-reader';
import axios from 'axios';

const converter = require('convert-csv-to-array');


class LandingPage extends Component {
  
      handleFileUpload(data) {
        try{
        const customersData = []
        const csvData = data.slice(1)
        csvData.forEach(item => {
          const ContactName = item[0];
          const InvoiceNumber = item[10]
          const InvoiceDate = item[12]
          const DueDate = item[13]
          const Description = item[16]
          const Quantity = item[17]
          const UnitAmount = item[18]

          const customerData = {ContactName, InvoiceNumber, InvoiceDate, DueDate, Description, Quantity, UnitAmount}
          customersData.push(customerData)
        });

        const postObject = {data: customersData}
        axios.post('https://csv-parse.herokuapp.com/api/v1/upload', postObject)
        this.props.history.push('/dashboard')
      }
      catch(e){
        console.log(e)
      }

      }
    
      render() {
        const fontSize = 5;
    
        return (
          <div align="center">
            <br /><br /><br />
            <div className="dropzone">
            <CSVReader onFileLoaded={data => this.handleFileUpload(data)} />
              <br /><br /><br />
            </div>
            <h2>Upload or drop your <font size={fontSize} color="#00A4FF">CSV</font><br /> file here.</h2>
          </div>
        )
      }
    }
    

export default LandingPage;
