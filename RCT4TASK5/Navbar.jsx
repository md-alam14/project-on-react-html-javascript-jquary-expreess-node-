import React, { Component } from "react";
import {Link} from "react-router-dom";
class NavBar extends Component {
render() {
    let names = ['Finance', 'HR','Technology', 'Marketing'];
    let names1 = ['VP', 'Manager', 'Trainee'];

return (<React.Fragment>


<nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
<div className="">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
<Link to="/svr/Employees" className="navbar-brand">
Employees portal
</Link>

</li>
<li className="nav-item">
<Link className="nav-link" to="/svr/addEmployees">
New Employee
</Link>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle"
href="#"
id="navbarDropdown"
role="button"
data-toggle="dropdown">Departments 
</a>
<div className="dropdown-menu">
{names.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/svr/Employees/departments/${n1}`}>
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
data-toggle="dropdown">Designations
</a>
<div className="dropdown-menu">
{names1.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/svr/Employees/designations/${n1}`}>
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