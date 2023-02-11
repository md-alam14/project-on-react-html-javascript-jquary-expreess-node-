import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'


class Compd extends Component { //Make a request to the server
  state = {Employees:[]};
  //startIndex, endIndex, numOfItems, persons -> data
  async fetchData() {
    let {shopid} = this.props.match.params;
    console.log(shopid)
  let response = await http.get(`/totalPurchase/shop/${shopid}`);
  console.log("Employees",response);

  let {data} = response;
  console.log()
  this.setState({ Employees: data.rows });}

  componentDidMount(){
this.fetchData();}

componentDidUpdate(prevProps, prevState){
if (prevProps!==this.props)this.fetchData();}
  
   
render() {
 
  const { cities, companies, ages,Employees } = this.state;
  let {shopid} = this.props.match.params;
  console.log(Employees)
   return (
  <div className="container">
  <h4> List of Shop:{shopid}</h4>
 
  <div className="row">
 
    <div className="col-12">
    <div className="row text-center bg-dark text-white" >
 
  <div className="col-4 border">productid</div>
 
 
 < div className="col-2 border">quantity</div>
 < div className="col-2 border">price
 </div>
 < div className="col-4 border">totalpurchase
 </div>
 </div>
    
  {Employees.map((pr) => (
  <div className="row text-center" key={pr.purchaseid}>
  
  <div className="col-4 border">{pr.productid}</div>
 
  <div className="col-2 border">{pr.quantity}</div>
  <div className="col-2 border">{pr.price}</div>
  <div className="col-4 border">{pr.totalpurchase}</div>
 

  </div>

  ))}

  </div>
  </div>
  </div>);
}}
export default Compd