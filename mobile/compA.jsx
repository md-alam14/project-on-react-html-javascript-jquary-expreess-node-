import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import queryString from 'query-string'
import OptionsCB from "./Optioncb";
class CompA extends Component { 
  state = {mobile:[],
abc:["romType",'filter',"ram",'brand '],
 
ram:["3GB", "4GB", "6GB", "8GB"],
  brand : [ "Samsung", "Xiaomi", "Realme", "Apple"
   ],
  options:{brand:[], ram:[], rom:[]},
   rom:["32GB", "64GB", "128GB", "256GB"]};

  async fetchData() {
  let queryParams = queryString.parse(this.props.location.search);
  let sear=this.makeSearchString(queryParams)
  let { page = "1" } = queryParams;
  let response = await http.get(`/svr/mobile${sear}`);
  console.log("mobile",response);
  let {data} = response;
  let {rows}=data
  this.setState({ mobile:rows});}

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
    this.callURL("/svr/mobile", queryParams);
    };
    callURL= (url, options) => {
    let searchString = this.makeSearchString(options);
    this.props.history.push({ pathname: url, search: searchString,})
    }

    filterParams = (arr, queryParams) => {
      let { brand, ram, rom} = queryParams;

arr = this.filterParam(arr, "brand", brand);

arr = this.filterParam(arr, "ram", ram);

arr = this.filterParam(arr, "rom", rom);


return arr;
  }



filterParam = (arr, name, values) => {

if (!values) return arr;
let valuesArr = values.split(",");

let arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1 [name]));

return arr1;

};
    makeSearchString = (options) => {
      let {brand, ram, rom} = options;
      let searchStr = [];
      searchStr = this.addToQueryString(searchStr, "brand", brand);
      searchStr = this.addToQueryString(searchStr, "rom", rom);
      searchStr = this.addToQueryString(searchStr, "ram", ram);
     
      return searchStr;
      };
    
      makeAllOptions= (arr) => {

        let json = {};
        json.brand= this.getDifferentValues(arr, "brand");
        json.ram = this.getDifferentValues(arr, "ram");
        json.rom = this.getDifferentValues(arr, "rom");
      
        return json;}

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
        this.callURL("/svr/mobile", options);
    };
render() {
  const {  mobile,q='',filter,maxResults,options} = this.state;

  let queryParams = queryString.parse(this.props.location.search)
  let laptops1 =this.filterParams(mobile,queryParams) 
  let allOptions= this.makeAllOptions(mobile);
 let {name} = this.props.match.params;
 console.log(name)
 const{brand="",rom="",ram=""}=queryParams
 console.log("queryParams",queryParams)
let stu=name==undefined?mobile:mobile.filter((st)=>st.brand==name||st.ram===name||st.rom==name||st.os===name)
stu=queryParams.ram==undefined &&queryParams.brand==undefined&&queryParams.rom==undefined?stu:queryParams.brand==undefined&&queryParams.rom==undefined?
mobile.filter((st)=>st.ram==queryParams.ram):queryParams.ram==undefined &&queryParams.brand==undefined?
mobile.filter((st)=>st.rom==queryParams.rom):queryParams.ram==undefined &&queryParams.rom==undefined?
mobile.filter((st)=>st.brand==queryParams.brand):queryParams.rom==undefined?
mobile.filter((st)=>st.brand==queryParams.brand&&st.ram==queryParams.ram):queryParams.ram==undefined?
mobile.filter((st)=>st.brand==queryParams.brand&&st.rom==queryParams.rom):queryParams.brand==undefined?
mobile.filter((st)=>st.rom==queryParams.rom&&st.ram==queryParams.ram):
mobile.filter((st)=>st.rom==queryParams.rom&&st.ram==queryParams.ram&&st.brand==queryParams.brand)

   return (
  <div className="container">
 
 
  <div className="row">
 <div className="col-3">
 <OptionsCB
  options={queryParams}
  countries={this.state.brand }
  ram={this.state.ram}
romType={this.state.rom}
filterdata={filter}
allOptions={allOptions}
  onOptionChange={this.handleOptionChange}
  />
 </div>
    <div className="col-9">
 <h4> List of mobile</h4>
  
    <div className="row text-center bg-dark text-white">
  <div className="col-2 border">Name</div>
  <div className="col-1 border">Price</div>
  <div className="col-2 border">Brand</div>
  <div className="col-1 border">Rom</div>
 < div className="col-2 border">Ram</div>
 < div className="col-1 border">os</div>
 < div className="col-1 border"></div>
 < div className="col-2 border">
 </div>
  </div>
  
  {laptops1.map((pr) => (
  <div className="row text-center" key={pr.id}>
  <div className="col-2 border">{pr.name}</div>
  <div className="col-1 border">{pr.price}</div>
  <div className="col-2 border">{pr.brand}</div>
  <div className="col-1 border">{pr.rom}</div>
 < div className="col-2 border">{pr.ram}</div>
 < div className="col-1 border">{pr.os}</div>
 < div className="col-1 border"><Link to={`/svr/addmobile/${pr.id}/edit`}><button className="btn btn-warning" >Edit</button></Link></div>
 < div className="col-2 border"><Link to={`/svr/mobile/${pr.id}/delete`}>
    <button className="btn btn-danger" >Delete</button></Link>
 </div>
  </div>

  ))}

  </div>
  </div>
  </div>);
}}
export default CompA