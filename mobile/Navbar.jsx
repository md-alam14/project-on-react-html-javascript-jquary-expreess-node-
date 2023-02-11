import React, { Component } from "react";
import {Link} from "react-router-dom";
class NavBar extends Component {
render() {
    
   let ROM=["32GB", "64GB", "128GB", "256GB"] 
    let os=["Android", "iOS"]
    let brands =["Samsung", "Xiaomi", "Realme", "Apple"] 
    let ram= ["3GB", "4GB", "6GB", "8GB"]
return (<React.Fragment>


<nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
<div className="">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
<Link to="/svr/mobile" className="navbar-brand">
 Mobile
</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/svr/addmobile">
New Mobile
</Link>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle"
href="#"
id="navbarDropdown"
role="button"
data-toggle="dropdown">Brands 
</a>
<div className="dropdown-menu">
{brands.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/svr/mobile/Brands/${n1}`}>
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
data-toggle="dropdown">Ram
</a>
<div className="dropdown-menu">
{ram.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/svr/mobile/Ram/${n1}`}>
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
data-toggle="dropdown">ROM
</a>
<div className="dropdown-menu">
{ROM.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/svr/mobile/ROM/${n1}`}>
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
data-toggle="dropdown">os
</a>
<div className="dropdown-menu">
{os.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/svr/mobile/os/${n1}`}>
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