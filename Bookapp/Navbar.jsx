import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
render() {
return (<React.Fragment>

<nav className="navbar navbar-expand-sm navbar-light bg-light " >
<Link to="/" className="nav-brand">
<i class="fa-solid fa-book-open"></i>
</Link>
<div className="">
<ul className="navbar-nav mr-auto">
<li className="nav-item" >
<Link className="nav-link" to="/Employees/1" >
<b>
    Harry Potter
</b>

</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/emp">
    <b>Agatha Christie</b>

</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/Offices">
    <b>Premchand</b>

</Link>

</li>

<li className="nav-item">
<Link className="nav-link" to="/course/JavaScript">
    <b>Jane</b>

</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/Offices">
    <b>My Books</b>

</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/Offices">
    <b>Settings</b>

</Link>

</li>
</ul>
</div>
</nav>
</React.Fragment>)}}
export default NavBar