import React, { Component } from "react";
import {Link} from "react-router-dom";
class NavBar extends Component {
render() {
    let names = ["view","add"];
   

return (<React.Fragment>


<nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
<div className="">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
<Link to="/" className="navbar-brand">
Store portal
</Link>

</li>

<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle"
href="#"
id="navbarDropdown"
role="button"
data-toggle="dropdown">shops
</a>
<div className="dropdown-menu">
{names.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/shops/${n1}`}>
{n1}
</Link>
))}
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle"
href="#"
id="navbarDropdown"
role="button"
data-toggle="dropdown">Product 
</a>
<div className="dropdown-menu">
{names.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/products/${n1}`}>
{n1}
</Link>
))}
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle"
href="#"
id="navbarDropdown"
role="button"
data-toggle="dropdown">Purchases
</a>
<div className="dropdown-menu">
{names.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/purchases/${n1}`}>
{n1}
</Link>
))}
</div>

</li>
</ul>
</div>
</nav>
</React.Fragment>)}}
export default NavBar