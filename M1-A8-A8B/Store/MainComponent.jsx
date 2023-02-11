import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
 import CompA from "./compA";
import CompB from "./compB";
import NavBar from "./Navbar";
import Person from "./person";
import ADDPerson from "./ADDPerson";
import DeletePerson from "./delete";
import Compc from "./Store1";
import Compd from "./Store2";
import Product1 from "./product1";
import ADDProduct from "./productadd";
import Compe from "./product2";
import Compf from "./product3";
import Purchases1 from "./Purchases";
import ADDPro from "./purchase";
class MainComponent extends Component {
render() {
return (
<div className="container">
<NavBar />

<Switch>
   <Route path="/shops/view" component={CompA} /> 
   <Route path="/shops/add" component={ADDPerson} /> 
   <Route path="/products/view" component={Product1} /> 
   <Route path="/products/add/:productid" component={ADDProduct} /> 
   <Route path="/products/add" component={ADDProduct} /> 
   
   <Route path="/purchases/view" component={Purchases1} /> 
   <Route path="/purchases/add" component={ADDPro} /> 
   <Route path="/purchases/shops/:shopId" component={Compc} /> 
   
   <Route path="/purchases/products/:shopId" component={Compe} /> 
   <Route path="/totalPurchase/product/:shopId" component={Compf} /> 
  
    <Route path="/totalPurchase/shop/:shopid" component={Compd} />


</Switch>
</div>
);
}
}
export default MainComponent;