import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/index';
import PageNotFound from './Components/Default/index';
import Customer from './Components/Customers'
import TotalAmount from './Components/TotalAmountMonth'

export class Home extends Component{
  render() {
    return (
      <React.Fragment>  
     <Switch>
                <Route exact path="/" component={LandingPage}></Route>
                <Route exact path="/dashboard" component={Customer}></Route>
       <Route  component={PageNotFound}></Route>
     </Switch>
     </React.Fragment>
     

    )
  }
}
export default Home;
