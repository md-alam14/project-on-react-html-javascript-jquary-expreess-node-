import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'

class CompA extends Component { //Make a request to the server
  state = {Employees:[]};
  //startIndex, endIndex, numOfItems, persons -> data
  async fetchData() {
 
  let response = await http.get(`/shops`);
  console.log("Employees",response);
  let {data} = response;
  this.setState({ Employees: data.rows });}

  componentDidMount(){
this.fetchData();}
Edit=()=>{

}
componentDidUpdate(prevProps, prevState){
if (prevProps!==this.props)this.fetchData();}
  
   
render() {
 
  const { cities, companies, ages,Employees } = this.state;

   return (
  <div className="container">
  <h4> List of Shop</h4>
 
  <div className="row">
 
    <div className="col-12">
    <div className="row text-center bg-dark text-white" >
  <div className="col-2 border">shopId</div>
  <div className="col-4 border">name</div>
  <div className="col-2 border">rent</div>
 
 < div className="col-2 border"></div>
 < div className="col-2 border">
 </div>
 </div>
    
  {Employees.map((pr) => (
  <div className="row text-center" key={pr.empCode}>
  <div className="col-2 border">{pr.shopId}</div>
  <div className="col-4 border">{pr.name}</div>
  <div className="col-2 border">{pr.rent}</div>
 
 < div className="col-2 border"><Link to={`/purchases/shops/${pr.shopId}`}>Purchase</Link></div>
 < div className="col-2 border"><Link to={`/totalPurchase/shop/${pr.shopId}`}>
    Total purchases</Link>
 </div>
  </div>

  ))}

  </div>
  </div>
  </div>);
}}
export default CompA