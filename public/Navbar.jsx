import React, { Component } from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";
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
<Link className="nav-link" to="/stars?q=Harry Potter&startIndex=0" >
<b>
    Harry Potter
</b>

</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/stars?q=Agatha Christie&startIndex=0">
    <b>Agatha Christie</b>

</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/stars?q=Premchand&startIndex=0">
    <b>Premchand</b>

</Link>

</li>

<li className="nav-item">
<Link className="nav-link" to="/stars?q=Jane Austen&startIndex=0">
    <b>Jane Austen</b>

</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/stars/mysheif">
    <b>My Books</b>

</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/stars/Settings">
    <b>Settings</b>

</Link>

</li>
</ul>
</div>
</nav>
</React.Fragment>)}}
export default NavBar