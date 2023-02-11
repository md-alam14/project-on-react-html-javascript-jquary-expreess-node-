import React, { Component } from "react";
import {Link} from "react-router-dom"
class Office extends Component{
    state={}
    render(){
    const { offices,display} = this.props;
    const{value}=this.props.match.params;
    let prod=display?offices.filter(pr=>pr[display]===value):offices
    console.log(prod)
    return (
    <div className="container">
    <h4>Welcome to the offices  page</h4>
    {prod.map((pr) => (
    <div className="row">
 

   
   <div className="col-4 border"><Link to={`/adress/${pr.city}`}>{pr.city} </Link></div>
    <div className="col-8 border">{pr.address}</div>
 
    </div>
    
    ))}
    </div>)
    }
}
export default Office