import queryString from 'query-string'
import React, { Component } from "react";
import http from "./httpServer";
import { Link } from "react-router-dom";
import bookimage from'./image/bookimage.jpg' 
class Welcome extends Component {
    state = {data: {} ,page:"1",
  q:'',
  order:[],
  orderby:['None','newest','oldest','relevance'],
  section: [ "business", "politics", "technology","LifeandStyle"],
view:-1};
  //startIndex, endIndex, numOfItems, star -> data
  async fetchData() {
  let queryParams = queryString.parse(this.props.location.search);
  let sear=this.makeSearchString(queryParams)
  console.log(sear)
  const{sport}=this.props.match.params;
  let { page = "1" } = queryParams;
  let response = await http.get(`&${sear}`);
  console.log("stars",response);
  let {data} = response;
  this.setState({ data: data });}

  componentDidMount(){
this.fetchData();}

componentDidUpdate(prevProps, prevState){
if (prevProps!==this.props)this.fetchData();}
  handlePage = (incr) => {
    let queryParams = queryString.parse(this.props.location.search);
    queryString.q==""?this.state.view=-1:this.state.view=0
    console.log("stars",queryParams)
    let { page = "1" } = queryParams;
   
  let newpage=page - (-incr)
   queryParams.page=newpage
    this.callURL(`/stars`, queryParams);
    };
    filterParams = (arr, queryParams) => {
      let { sport} = this.props.match.params;
     
      let sear=this.makeSearchString(queryParams)

arr = this.filterParam(arr, "sear", sear);





return arr;
  }



filterParam = (arr, name, values) => {

if (!values) return arr;
let valuesArr = values.split(",");

let arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1 [name]));

return arr1;

};
    callURL= (url, options) => {
    let searchString = this.makeSearchString(options);
    
    this.props.history.push({ pathname: url, search: searchString,})
    }
    makeSearchString = (options) => { 
      let { sport} = this.props.match.params;
      let s1={...this.state}
      let {page, q, name, section ,orderby} = options;
this.state.q=q

this.state.order=orderby
      let searchStr = ""; 
        searchStr = this.addToQueryString(searchStr, "q", q);
      searchStr = this.addToQueryString(searchStr, "page", page);
      searchStr = this.addToQueryString(searchStr, "section", section);
      searchStr = this.addToQueryString(searchStr, "orderby",orderby);
      searchStr = this.addToQueryString(searchStr, "order-by",orderby);
    
   console.log(searchStr)
      
      return searchStr;
      };
      filterParam = (arr, name, values) => {

        if (!values) return arr;
        let valuesArr = values.split(",");
        
        let arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1 [name]));
        
        return arr1;
        
        };
      addToQueryString = (str, paramName, paramValue)=> paramValue
      ? str
      ? `${str}&${paramName}=${paramValue}`
      : `${paramName}=${paramValue}`
      : str;
     
      handleOptionChange= (options)=>{
        this.callURL("/stars", options)
      }
      input1=()=>{

      }
      handleChange = (e) => {
         const { currentTarget: input } = e;
      let s1 = {...this.state };
      let queryParams = queryString.parse(this.props.location.search) 
      
      s1.q = input.value;
      queryString.q= s1.q
     
     
      this.setState(s1);
      };
      handleSubmit = () => {
       
        this.callURL(`/stars`, queryString);}
render() {
    let {q=''}=this.state
return (
 <div className="container">
    <div >
        <img src={bookimage} alt="Library" style={{height:"30%",width:"30%",marginLeft:'30%',marginRight:"auto"}}/>
    </div>
<br />

 <div className="row">
 <div className="col-10">
 <input

type="text"

id="q"

name="q"
value={q}
className="form-control" placeholder="Enter  search text" onChange={this.handleChange}
></input>
 </div>
 <div className="col-2">
 <div className="btn btn-primary" onClick={this.handleSubmit}> Search</div>
 </div>
</div>
</div>
);
}
}
export default Welcome;