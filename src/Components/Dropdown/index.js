import React, { Component } from 'react';

class Dropdown extends Component {

render() {
    
return (

<div className="dropdown show">
  <a className="btn btn-secondary dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {this.props.option}
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
<a className="dropdown-item" href="#">{this.props.option}</a>
   
  </div>
</div>
)
    }
}

export default Dropdown;