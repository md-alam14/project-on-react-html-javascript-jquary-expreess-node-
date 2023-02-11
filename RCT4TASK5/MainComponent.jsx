import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
 import CompA from "./compA";
import CompB from "./compB";
import NavBar from "./Navbar";
import Person from "./person";
import ADDPerson from "./ADDPerson";
import DeletePerson from "./delete";
class MainComponent extends Component {
render() {
return (
<div className="container">
<NavBar />

<Switch> <Route path="/svr/Employees/departments/:name" component={CompA} /> 
    <Route path="/svr/Employees/designations/:name" component={CompA} /> 
      
      <Route path="/svr/Employees/:empCode" component={DeletePerson} />
      
<Route path="/svr/addEmployees/:empCode" component={ADDPerson} />
 
<Route path="/svr/Employees/:name" component={CompA} />
<Route path="/svr/Employees" component={CompA} />




<Route path="/svr/addEmployees" component={ADDPerson} />


</Switch>
</div>
);
}
}
export default MainComponent;