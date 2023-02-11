import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import http from "./httpServer";
import OptionsCB from "./Optioncb";
import queryString from 'query-string'
import Cart from "./mycart";

class Star extends Component { //Make a request to the server
  state = {data:[] ,pageNumber:1,
  q:'',
  order:[],
  cart:[],
  cartdata:[],
  maxResults:8,
  abc:["printType",'filter',"orderBy",'langRestrict'],
  setting:[{t:'orderBy',c:"checked"},
  {t:'filter',c:"checked"},
  {t:'langRestrict',c:"checked"},
  {t:'print',c:"checked"},
],
orderBy:['None','newest','relevance'],
  langRestrict: [ {tittle:"English",value:"En"},{tittle:"Franch",value:"Fr"},
  {tittle:"Hindi",value:"hi"}, 
  {tittle:"Spanish",value:"es"}, 
  {tittle:"Chinese",value:"zh"}, 
   ],
   filter:[ {tittle:'Full Volume',key:"full"},
   , {tittle:'partial Volume',key:"partial"}
   , {tittle:'Free Google e-Books',key:"ebooks"},
   , {tittle:'Paid Google e-Books',key:"paid-ebooks"},
   ],
   print:["All","Books","Magazines"],
startIndex:0};
handleChange= (e) => {
  const { currentTarget: input } = e;
let s1={...this.setState}
  s1.maxResults=''
  s1.maxResults= input.value;
  
 this.setState(s1)
  };
  //startIndex, endIndex, numOfItems, star -> data
  async fetchData() {
  let queryParams = queryString.parse(this.props.location.search);
  let sear=this.makeSearchString(queryParams)
  console.log(sear)

  let response = await http.get(`&${sear}`);

  let {data} = response; 
  let {items}=data
  const {volumeInfo}=items
  console.log("stars",response);
  let s1={...this.state}
  s1.data=items

  this.setState(s1);}

  componentDidMount(){
this.fetchData();}

componentDidUpdate(prevProps, prevState){
if (prevProps!==this.props)this.fetchData();}
  handlestartIndex = (incr) => {
    let queryParams = queryString.parse(this.props.location.search);
    console.log("stars",queryParams)
    let { startIndex = "1" } = queryParams;
   

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
      let queryParams = queryString.parse(this.props.location.search) 
      let {startIndex=0, q, langRestrict='',maxsize='' ,orderBy='',filter='',printType='',maxResults} = options;
this.state.q=q
this.state.order=orderBy
console.log("www",options)


maxResults=this.state.maxResults
options.startIndex==0?this.state.pageNumber=1:startIndex=0
this.state.pageNumber===1?startIndex=this.state.startIndex:

options.startIndex==0?startIndex=0:startIndex=this.state.startIndex-(-maxResults)

console.log(maxResults)
      let searchStr = ""; 
        searchStr = this.addToQueryString(searchStr, "q", q);
   searchStr = this.addToQueryString(searchStr, "startIndex",startIndex);

      searchStr = this.addToQueryString(searchStr, "maxsize", maxsize);
      searchStr = this.addToQueryString(searchStr, "langRestrict", langRestrict);
      searchStr = this.addToQueryString(searchStr, "orderBy",orderBy);
      searchStr = this.addToQueryString(searchStr, "filter",filter);
      searchStr = this.addToQueryString(searchStr, "printType",printType);
     
    
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
      
      handleChange = (e) => {
         const { currentTarget: input } = e;
      let s1 = {...this.state };
      let queryParams = queryString.parse(this.props.location.search) 
     
      s1.q = input.value;
      
      queryString.q= s1.q
      this.setState(s1);
      };
      ADDto=(a)=>{
        console.log(a)
        const s1={...this.state}
       let idd=s1.cartdata.findIndex((st)=>
        st==s1.data[a].id)
        
        idd==-1?s1.cartdata.push(s1.data[a].id):
        s1.cartdata.splice(idd,1)
        idd==-1?s1.cart.push(s1.data[a]):
        s1.cart.splice(s1.data[idd],1)


this.setState(s1)
      }
      max=(e)=>{
       console.log(e)
       const { currentTarget: input } = e;
       let s1={...this.setState}
         
         s1.maxResults= input.value;
         console.log(s1.maxResults)
        this.setState(s1)
      }
      ADDto1=(a)=>{
        console.log(a)
        const s1={...this.state}
       let idd=s1.cartdata.findIndex((st)=>
        st==s1.data[a].id)
        
        
        s1.cartdata.splice(a,1)
       
        s1.cart.splice(a,1)


this.setState(s1)
      }
   
      handleSubmit = () => {
       
        this.callURL(`/stars`, queryString);}
        data=(box)=>{
          let s1 = {...this.state };
       let find =s1.abc.findIndex((st)=>st==box)
     find==-1?s1.abc.push(box):
       s1.abc.splice(find,1)
       let printType =s1.abc.findIndex((st)=>st=="printType")
       let filter =s1.abc.findIndex((st)=>st=="filter")
       let orderBy =s1.abc.findIndex((st)=>st=="orderBy")
       let langRestrict =s1.abc.findIndex((st)=>st=="langRestrict")
    
printType==-1?s1.print=[]:s1.print=["All","Books","Magazines"]
filter==-1?s1.filter=[]:s1.filter=[ 'Full Volume'
   , 'Partial Volume'
    ,'Free Google e-Books'
   ,'Paid Google e-Books']
orderBy==-1?s1.orderBy=[]:s1.orderBy=['None','newest','relevance']
langRestrict==-1?s1.langRestrict=[]:s1.langRestrict=[ {tittle:"English",value:"En"},{tittle:"Franch",value:"Fr"},
  {tittle:"Hindi",value:"hi"}, 
  {tittle:"Spanish",value:"es"}, 
  {tittle:"Chinese",value:"zh"}, 
   ]
       
  this.setState(s1)
        }
        handlePage=(a)=>{
          let queryParams = queryString.parse(this.props.location.search) 
          let s1 = {...this.state };
         queryParams.startIndex= queryParams.startIndex+s1.maxResults
        s1.pageNumber= s1.pageNumber-(-a)
       queryParams.pageNumber= s1.pageNumber
        s1.pageNumber==1?s1.startIndex=1:
         s1.startIndex=(s1.pageNumber-1) * s1.maxResults 
    queryParams.startIndex= s1.startIndex

  
    
    this.setState(s1)
        }
render() { 

  const { page, numOfItems, numberOfPages,totalItemCount, stars = [],response=[] ,volumeInfo=[]} =this.state.data;

   let queryParams = queryString.parse(this.props.location.search) 
      const {  qurry=[], langRestrict ,q='',orderBy,print,filter,maxResults,options} = this.state; 
console.log(volumeInfo)


  let { sport} = this.props.match.params;
  q==""?this.state.page=1:this.state.pag=1

  let sear=this.makeSearchString(queryParams)
queryParams.pageNumber=this.state.pageNumber-1
 
console.log("www",options)

  let startIndex=( this.state.pageNumber-1) * maxResults 
  this.state.startIndex=startIndex
  
 let prod= this.state.data.length>8?this.state.data.filter((st,index)=>maxResults===''?index<8:index<maxResults):this.state.data

let endIndex=this.state.pageNumber>(startIndex-1)?startIndex-(-maxResults)-1:startIndex-(-maxResults)-1


   return (
     
  <div className="container">
    {sport==="mysheif"?
<div className="row">

{this.state.cart.length==0?<h1 className="text-center bg-info">Book are empty</h1>:
            <h1 className="text-center bg-info">All Book </h1>}
            {this.state.cart===[]?"":this.state.cart.map((pr,index) => (
                <div className="col-4 border" style={{background:"#32cd32"}}>
                  <img src={pr.volumeInfo.imageLinks === undefined
        ? ""
        : `${pr.volumeInfo.imageLinks.thumbnail}`} alt="" style={{margin:"20%"}}/> <br />
                  <b>{pr.volumeInfo.title}</b>,<b><br/>author:{pr.volumeInfo.authors},<br/></b>
                  <br />
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                  </div>
                  <button className="btn btn-secondary" onClick={()=>this.ADDto1(index)}>
                  remove from MyBook</button>
                  </div>
        ))
   }

</div>
:sport=="Settings"?<React.Fragment><h1 className="text-dark">Select Options for filtering on Left Panel</h1>
<h4> <input type="checkbox" name="printType"  onClick={()=>this.data("printType")} checked={this.state.abc.find((st)=>
  st==="printType")}/> printType--(Restrict to books or magazines)</h4>
<br />
<h4> <input type="checkbox" name="languages" onClick={()=>this.data("langRestrict")} 
checked={this.state.abc.find((st)=>
  st==="langRestrict")}/> languages--(Restricts the volumes returned to those that are tagged with the specified language.)</h4>
<br />
<h4> <input type="checkbox" name="filter"  onClick={()=>this.data("filter")} 
checked={this.state.abc.find((st)=>
  st==="filter")}/> filter-(filter search results by volume type and availability.)</h4>
<br />
<h4> <input type="checkbox" name="orderBy"  onClick={()=>this.data("orderBy")}
checked={this.state.abc.find((st)=>
  st==="orderBy")} /> orderBy---(Order of the volume search results.)</h4>
<h3 className="text-danger">No of entries on a page</h3>
<input type="text" name="maxResults"  onChange={this.max} value={this.state.maxResults}/>
<br />
</React.Fragment>:
  <div className="row">  
  
  <div className="col-3">
  <OptionsCB
  options={queryParams}
  countries={langRestrict}
  order={orderBy}
printType={print}
filterdata={filter}

  onOptionChange={this.handleOptionChange}
  />
    </div>
    <div className="col-9">
     
    <div className="row">
    <div class="form-outline col-12">
  
<h1 className="text-center text-danger">{this.state.q}</h1>
   
      
       <h6> {startIndex+1}-{endIndex+1} entries
    </h6>

    <div className="row">
  
    
  {prod.map((pr,index) => (


  <div className="col-3 border" style={{background:"#32cd32"}} key={pr.volumeInfo}>

  <img src={pr.volumeInfo.imageLinks === undefined
        ? ""
        : `${pr.volumeInfo.imageLinks.thumbnail}`} alt="img" style={{margin:"20%"}}/>
    <br />
    <b>{pr.volumeInfo.title}</b>,<b><br/>author:{pr.volumeInfo.authors},<br/></b>
    <br />
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4"></div>
      <div className="col-4"></div>
    </div>
    <button className="btn btn-secondary" onClick={()=>this.ADDto(index)}>{this.state.cartdata.filter((st)=>
     st===pr.id)?'remove from mybook'
    :'Add To MyBook'}</button>
    </div>
 


  ))}

  <div className="row">
<div className="col-2">
{startIndex> 1? (
  <Link to={`/stars?&${sear}`}>
<button
className="btn btn-warning btn-sm" onClick={() => this.handlePage(-1)}>
Prev
</button></Link>
): ('')}
</div>
<div className="col-8"></div>
<div className="col-2"><Link to={`/stars?&${sear}`}><button
className="btn btn-warning btn-sm" onClick={() => this.handlePage(1)}>
NEXT
</button>
</Link>
</div>
</div>
  </div>
  </div>
  </div></div>
  </div>}
  </div>);
}}
export default Star