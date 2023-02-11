import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'
import OptionsCB from "./Optioncb";
class CompA extends Component { 
  state = {Employees:[],
abc:["designationType",'filter',"gender",'department '],
 
gender:["Male","Female"],
  department : [ 'Finance', 'HR','Technology', 'Marketing','Operations'
   ],
   
   designation:['VP', 'Manager', 'Trainee']};

  async fetchData() {
  let queryParams = queryString.parse(this.props.location.search);
  let sear=this.makeSearchString(queryParams)
  let { page = "1" } = queryParams;
  let response = await http.get(`/svr/Employees${sear}`);
  console.log("Employees",response);
  let {data} = response;
  let {rows}=data
  this.setState({ Employees:rows});}

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
    this.callURL("/svr/Employees", queryParams);
    };
    callURL= (url, options) => {
    let searchString = this.makeSearchString(options);
    this.props.history.push({ pathname: url, search: searchString,})
    }
    makeSearchString = (options) => {
      let {department, gender, designation, minAge } = options;
      let searchStr = "";
      searchStr = this.addToQueryString(searchStr, "department", department);
      searchStr = this.addToQueryString(searchStr, "designation", designation);
      searchStr = this.addToQueryString(searchStr, "gender", gender);
     
      return searchStr;
      };
    
      addToQueryString = (str, paramName, paramValue)=> paramValue
      ? str
      ? `${str}&${paramName}=${paramValue}`
      : `${paramName}=${paramValue}`
      : str;
      handleOptionChange= (options)=>{
        this.callURL("/svr/Employees", options)
      }
render() {
  const {  Employees,q='',filter,maxResults,options} = this.state;

  let queryParams = queryString.parse(this.props.location.search)

 let {name} = this.props.match.params;
 const{department="",designation="",gender=""}=queryParams
 console.log("queryParams",queryParams)
let stu=name==undefined?Employees:Employees.filter((st)=>st.department==name||st.designation===name)
stu=queryParams.gender==undefined &&queryParams.department==undefined&&queryParams.designation==undefined?stu:queryParams.department==undefined&&queryParams.designation==undefined?
Employees.filter((st)=>st.gender==queryParams.gender):queryParams.gender==undefined &&queryParams.department==undefined?
Employees.filter((st)=>st.designation==queryParams.designation):queryParams.gender==undefined &&queryParams.designation==undefined?
Employees.filter((st)=>st.department==queryParams.department):queryParams.designation==undefined?
Employees.filter((st)=>st.department==queryParams.department&&st.gender==queryParams.gender):queryParams.gender==undefined?
Employees.filter((st)=>st.department==queryParams.department&&st.designation==queryParams.designation):queryParams.department==undefined?
Employees.filter((st)=>st.designation==queryParams.designation&&st.gender==queryParams.gender):
Employees.filter((st)=>st.designation==queryParams.designation&&st.gender==queryParams.gender&&st.department==queryParams.department)

   return (
  <div className="container">
 
 
  <div className="row">
 <div className="col-3">
 <OptionsCB
  options={queryParams}
  countries={this.state.department }
  gender={this.state.gender}
designationType={this.state.designation}
filterdata={filter}

  onOptionChange={this.handleOptionChange}
  />
 </div>
    <div className="col-9">
 <h4> List of Employees</h4>
    
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