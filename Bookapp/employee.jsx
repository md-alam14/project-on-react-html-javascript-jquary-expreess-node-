import React, { Component } from "react";
import {Link,NavLink} from "react-router-dom"
import "./app.css"
import queryString from "query-string"
import ShowOptions from "./OPTION";
import LeftPanelOptionscb from "./Leftpanel"
class Employees extends Component{
    state={next:[1,2,3,4,5],
    new:[]}
    handleClick=(br)=>{
        this.props.history.push(`/Employees/${br}`)
    }
    filterParams = (arr, queryParams) => {
        let { dept, designation} = queryParams;

arr = this.filterParam(arr, "dept", dept);

arr = this.filterParam(arr, "designation", designation);



return arr;
    }



filterParam = (arr, name, values) => {

if (!values) return arr;
let valuesArr = values.split(",");

let arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1 [name]));

return arr1;

};
  handleOptionChange = (options) => {

        this.callURL("/Employees/1", options);
        
        };
         callURL = (url, options) => {
        
        let searchStr = this.makeSearchString(options);
        
        this.props.history.push({ pathname: url, search: searchStr,
        
        });
        
        };
      makeSearchString = (options) =>{
          let { dept, designation } = options;
        
        let searchStr = "";
        
        searchStr = this.addToQueryString(searchStr, "dept", dept);
        
        searchStr = this.addToQueryString(searchStr, "designation", designation);
        return searchStr;
      }
        
      
    makeAllOptions= (arr) => {

        let json = {};
        json.designation= this.getDifferentValues(arr, "designation");
        json.dept = this.getDifferentValues(arr, "dept");
       
        return json;}
      addToQueryString = (str, paramName, paramValue) => paramValue
        
        ? str
        ? `${str}&${paramName}=${paramValue}`
        
        : `${paramName}=${paramValue}`
        
        : str;
        
        getDifferentValues = (arr, name) =>
        arr.reduce(
            (acc, curr) =>
        acc.find((val) => val === curr[name]) ? acc: [...acc, curr[name]],[]
        );
    render(){
    const { emps} = this.props;
    const {next}=this.state
    const Queryparams=queryString.parse(this.props.location.search)
    console.log("Queryparams",Queryparams)
    const{page=1}=this.props.match.params;
    let prod=this.filterParams(emps,Queryparams) 
    console.log(prod)
      let search=this.makeSearchString(Queryparams)
let pageNum=+page
let size=4
let startIndex=(pageNum-1) * size

let endIndex=prod.length>(startIndex+size-1)?startIndex+size-1:prod.length-1
let prods=
    prod.length>4
    ?prod.filter((st,index)=>index>=startIndex && index<=endIndex):prod;
    
    prods=
    prod.length>4
    ?prod.filter((st,index)=>index>=startIndex && index<=endIndex):prod;
    let allOptions= this.makeAllOptions(prods);
    return (
    <div className="container">
        <div className="row">
            <div className="col-3">
            <LeftPanelOptionscb
allOptions={allOptions}
options={Queryparams}
onOptionChange={this.handleOptionChange} />
            </div>
            <div className="col-9">

        
    <h4>Welcome to the Employees  page</h4>
    <h6>Showing {startIndex+1} to {endIndex+1} of {prod.length}
        </h6>
    {prods.map((pr) => (
    <div className="row">
    <div className="col-2 border"><Link to={`/name/${pr.id}`}>{pr.id}</Link></div>
   
   <div className="col-4 border">{pr.name}</div>
    <div className="col-3 border">{pr.dept}</div>
    <div className="col-3 border">{pr.designation}</div>
    </div>
    
    ))}
    <div className="row">
<div className="col-2">{startIndex>0? <Link to={`/Employees/${pageNum - 1}?${search}`}>Prev </Link> :("")}</div>
<div className="col-8"></div>
<div className="col-2">{ endIndex<prod.length-1?<Link to={`/Employees/${pageNum + 1}?${search}`}>Next</Link>:("")}</div>
    </div>
  
    </div>    </div>
        </div>)
    }
}
export default Employees