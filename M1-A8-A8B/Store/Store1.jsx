import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'


class Compc extends Component { //Make a request to the server
  state = {Employees:[]};
  //startIndex, endIndex, numOfItems, persons -> data
  async fetchData() {
 
    let {shopId} = this.props.match.params;
    console.log(shopId)
  let response = await http.get(`/purchases/shops/${shopId}`);
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
  let {shopId} = this.props.match.params;
   return (
  <div className="container">
  <h4> List of shopId:{shopId}</h4>
 
  <div className="row">
 
    <div className="col-12">
    <div className="row text-center bg-dark text-white" >
  <div className="col-2 border">purchaseid</div>
  <div className="col-4 border">shopid</div>
  <div className="col-2 border">productid</div>
 
 < div className="col-2 border">quantity</div>
 < div className="col-2 border">price
 </div>
 </div>
    
  {Employees.map((pr) => (
  <div className="row text-center" key={pr.purchaseid}>
  <div className="col-2 border">{pr.purchaseid}</div>
  <div className="col-4 border">{pr.shopid}</div>
  <div className="col-2 border">{pr.productid}</div>
  <div className="col-2 border">{pr.quantity}</div>
  <div className="col-2 border">{pr.price}</div>
 

  </div>

  ))}

  </div>
  </div>
  </div>);
}}
export default Compc