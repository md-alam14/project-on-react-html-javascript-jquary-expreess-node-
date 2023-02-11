import React, { Component } from "react";
import {Route
    ,Switch
} from "react-router-dom"
import Welcome from "./Welcome"

import Star from "./Stars";
import Cart from "./mycart";
import NavBar from "./Navbar";


class MainComponent extends Component {
state = {
         
};

render() {
    let{star,cart}=this.state
    console.log(this.props.cart)
return (<React.Fragment>
    
<div className="container">
<NavBar />

<Switch>
    <Route path="/stars/:sport" render={(props) =><Star {...props} star={star} />}/>
<Route path="/stars" render={(props) =><Star {...props} star={star} />}/>



<Route path="/" render={(props) =><Welcome {...props} Welcome={Welcome} />}/>






</Switch>
</div>
</React.Fragment>);
}}
export default MainComponent;