import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'
import LeftPanelOptionscb from "./Optioncb";
class Purchases1 extends Component { //Make a request to the server
  state = {Employees:[]};
  //startIndex, endIndex, numOfItems, persons -> data
  async fetchData() {
 
  let response = await http.get(`/purchases`);
  console.log("Employees",response);
  let {data} = response;
  this.setState({ Employees: data.rows });}

  componentDidMount(){
this.fetchData();}
Edit=()=>{

}
componentDidUpdate(prevProps, prevState){
if (prevProps!==this.props)this.fetchData();}
filterParams = (arr, queryParams) => {
    let { productid,shopid} = queryParams;
console.log(queryParams)
arr = this.filterParam(arr, "productid", productid);
arr = this.filterParam(arr, "shopid", shopid);


return arr;
}



filterParam = (arr, name, values) => {

if (!values) return arr;
let valuesArr = values.split(",");

let arr1 = arr.filter((a1) => valuesArr.find((val) => val == a1[name]));

return arr1;

};
  makeSearchString = (options) => {
    let {productid, shopid,sort} = options;
    let searchStr = [];
    searchStr = this.addToQueryString(searchStr, "productid", productid);
    searchStr = this.addToQueryString(searchStr, "shopid", shopid);
    searchStr = this.addToQueryString(searchStr, "sort", sort);
    
   
    return searchStr;
    };
  
    makeAllOptions= (arr) => {

      let json = {};
      json.productid= this.getDifferentValues(arr, "productid");
     json.shopid = this.getDifferentValues(arr, "shopid");
    
      return json;}
      callURL= (url, options) => {
        let searchString = this.makeSearchString(options);
        this.props.history.push({ pathname: url, search: searchString,})
        }
      getDifferentValues = (arr, name) =>
      arr.reduce(
          (acc, curr) =>
      acc.find((val) => val === curr[name]) ? acc: [...acc, curr[name]],[]
      );
    addToQueryString = (str, paramName, paramValue)=> paramValue
    ? str
    ? `${str}&${paramName}=${paramValue}`
    : `${paramName}=${paramValue}`
    : str;
    handleOptionChange = (options) => { 
      this.callURL("/purchases/view", options);
  };
render() {
const {  Employees,q='',filter,maxResults,options} = this.state;

let queryParams = queryString.parse(this.props.location.search)
let laptops1 =this.filterParams(Employees,queryParams) 
let allOptions= this.makeAllOptions(Employees);
let sort=[ 'st1','pr1','QtyAsc','QtyDesc','ValueAsc','ValueDesc']
let stu=queryParams.sort=="st1"?laptops1.sort((p1,p2)=>p1.shopid-p2.shopid):queryParams.sort=="pr1"?laptops1.sort((p1,p2)=>p1.productid-p2.productid):
queryParams.sort=="QtyAsc"?laptops1.sort((p1,p2)=>p1.quantity-p2.quantity):queryParams.sort=="QtyDesc"?laptops1.sort((p1,p2)=>p2.quantity-p1.quantity):
queryParams.sort=="ValueAsc"?laptops1.sort((p1,p2)=>p1.quantity*p1.price-p2.quantity*p2.price):queryParams.sort=="ValueDesc"?laptops1.sort((p1,p2)=>p2.quantity*p2.price-p1.quantity*p1.price):laptops1
   return (
  <div className="container">
    <div className="row">
        <div className="col-3">
        <LeftPanelOptionscb
  options={queryParams}
 
allOptions={allOptions}
  onOptionChange={this.handleOptionChange}
  />
        </div>
        <div className="col-9">
  <h4> List of Purchase</h4>
 
  <div className="row">
 
    <div className="col-12">
    <div className="row text-center bg-dark text-white" >
  <div className="col-2 border">purchaseid</div>
  <div className="col-4 border">shopid</div>
  <div className="col-2 border">productid</div>
  <div className="col-2 border">quantity</div>
  <div className="col-2 border">price</div>

 
 </div>
    
  {laptops1.map((pr) => (
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
  </div>
    </div>
  </div>);
}}
export default Purchases1