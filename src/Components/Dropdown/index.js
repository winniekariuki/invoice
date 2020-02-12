import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
class DropDown extends Component {
 
    render() {
    const  options= ['one ', 'two', 'three']
   const  defaultOption = options[0]
   return (
       <div >
           <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" className="dropdown-button"/>
     </div>
   )
 }
}
export default DropDown;
