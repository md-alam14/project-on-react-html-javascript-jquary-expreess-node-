import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'

class Product1 extends Component { //Make a request to the server
  state = {Employees:[]};
  //startIndex, endIndex, numOfItems, persons -> data
  async fetchData() {
 
  let response = await http.get(`/products`);
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
  <div className="col-2 border">productid</div>
  <div className="col-2 border">productname</div>
  <div className="col-2 border">category</div>
  <div className="col-2 border">description</div>
 
 < div className="col-1 border"></div>
 < div className="col-1 border">
 </div>
 </div>
    
  {Employees.map((pr) => (
  <div className="row text-center" key={pr.productid}>
  <div className="col-2 border">{pr.productid}</div>
  <div className="col-2 border">{pr.productname}</div>
  <div className="col-2 border">{pr.category}</div>
  <div className="col-2 border">{pr.description}</div>
  < div className="col-1 border"><Link to={`/products/add/${pr.productid}`}>Edit</Link></div>
 < div className="col-1 border"><Link to={`/purchases/products/${pr.productid}`}>Purchase</Link></div>
 < div className="col-2 border"><Link to={`/totalPurchase/product/${pr.productid}`}>
    Total purchases</Link>
 </div>
  </div>

  ))}

  </div>
  </div>
  </div>);
}}
export default Product1