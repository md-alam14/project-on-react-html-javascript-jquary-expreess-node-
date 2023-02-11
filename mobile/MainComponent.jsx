import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
 import CompA from "./compA";

import NavBar from "./Navbar";

import ADDPerson from "./ADDPerson";
import DeletePerson from "./delete";
class MainComponent extends Component {
render() {
return (
<div className="container">
<NavBar />

<Switch> <Route path="/svr/mobile/Brands/:name" component={CompA} /> 
    <Route path="/svr/mobile/Ram/:name" component={CompA} /> 
    <Route path="/svr/mobile/ROM/:name" component={CompA} /> 
    <Route path="/svr/mobile/os/:name" component={CompA} /> 
      
      <Route path="/svr/mobile/:id" component={DeletePerson} />
      
<Route path="/svr/addmobile/:id" component={ADDPerson} />
 
<Route path="/svr/mobile/:name" component={CompA} />
<Route path="/svr/mobile" component={CompA} />




<Route path="/svr/addmobile" component={ADDPerson} />


</Switch>
</div>
);
}
}
export default MainComponent;