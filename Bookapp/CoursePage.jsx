import React, { Component } from "react";
import {Link} from "react-router-dom"
class Employees1 extends Component{
    state={ Department:['Technology', "Finance", "Marketing", "HR","Operations"],}
    render(){
        let {Department}=this.state
    const {emps} = this.props;
    const{dept}=this.props.match.params;
    let prod=emps.filter(pr=>pr.dept==dept)
   
    console.log(Department)
    return (<React.Fragment>
    <div className="container">
        <div className="row">
    <h4>Welcome to the Employees  of {dept}</h4>
    {prod.map((pr) => (
    <div className="row">
    <div className="col-3 border"><Link to={`/name/${pr.id}`}>{pr.id}</Link></div>
   
   <div className="col-3 border">{pr.name}</div>
    <div className="col-3 border">{pr.dept}</div>
    <div className="col-3 border">{pr.designation}</div>
    </div>
    
    ))}
    </div>
    <div className="row">
    <h4>LIST OF DEPARTMENT</h4>
    {Department.map((st)=>(
    <li className="nav-item">
    <Link  to={`/dept/${st}`}>{st}</Link>
    </li>
    ))}
   </div> </div></React.Fragment>)
    }
}
export default Employees1