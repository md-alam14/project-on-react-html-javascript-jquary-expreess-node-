import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'

class CompA extends Component { //Make a request to the server
  state = {Employees:[], cities: ["London", "Paris", "New Delhi", "Bangalore"], 
  companies: ["Apple", "Google", "Facebook", "Microsoft", "Tesla"], 
ages:[25,30,35,40,45,50]};
  //startIndex, endIndex, numOfItems, persons -> data
  async fetchData() {
  let queryParams = queryString.parse(this.props.location.search);
  let sear=this.makeSearchString(queryParams)
  let { page = "1" } = queryParams;
  let response = await http.get(`/svr/Employees${sear}`);
  console.log("Employees",response);
  let {data} = response;
  this.setState({ Employees: data });}

  componentDidMount(){
this.fetchData();}
Edit=()=>{

}
componentDidUpdate(prevProps, prevState){
if (prevProps!==this.props)this.fetchData();}
  handlePage = (incr) => {
    let queryParams = queryString.parse(this.props.location.search);
    let { page = "1" } = queryParams;
    let newPage = +page + incr; queryParams.page = newPage;
    this.callURL("/Employees", queryParams);
    };
    callURL= (url, options) => {
    let searchString = this.makeSearchString(options);
    this.props.history.push({ pathname: url, search: searchString,})
    }
    makeSearchString = (options) => {
      let {page, city, company, minAge } = options;
      let searchStr = "";
      searchStr = this.addToQueryString(searchStr, "page", page);
      searchStr = this.addToQueryString(searchStr, "city", city);
      searchStr = this.addToQueryString(searchStr, "company", company);
      searchStr = this.addToQueryString(searchStr, "minAge", minAge);
      return searchStr;
      };
    
      addToQueryString = (str, paramName, paramValue)=> paramValue
      ? str
      ? `${str}&${paramName}=${paramValue}`
      : `${paramName}=${paramValue}`
      : str;
      handleOptionChange= (options)=>{
        this.callURL("/Employees", options)
      }
render() {
 
  const { cities, companies, ages,Employees } = this.state;
  let queryParams = queryString.parse(this.props.location.search)

 let {name} = this.props.match.params;
 console.log(name)
let stu=name==undefined?Employees:Employees.filter((st)=>st.department==name||st.designation===name)
   return (
  <div className="container">
  <h4> List of Employees</h4>
 
  <div className="row">
 
    <div className="col-12">

    
  {stu.map((pr) => (
  <div className="row text-center" key={pr.empCode}>
  <div className="col-1 border">{pr.empCode}</div>
  <div className="col-2 border">{pr.name}</div>
  <div className="col-2 border">{pr.department}</div>
  <div className="col-1 border">{pr.designation}</div>
 < div className="col-2 border">{pr.salary}</div>
 < div className="col-1 border">{pr.gender}</div>
 < div className="col-1 border"><Link to={`/svr/addEmployees/${pr.empCode}/edit`}><button className="btn btn-warning" >Edit</button></Link></div>
 < div className="col-2 border"><Link to={`/svr/Employees/${pr.empCode}/delete`}>
    <button className="btn btn-danger" >Delete</button></Link>
 </div>
  </div>

  ))}

  </div>
  </div>
  </div>);
}}
export default CompA