import React, { Component } from "react";
import queryString from 'query-string'
 class OptionsCB extends Component {
    state={
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
print:["All","Books","Magazines"]
    }
    handleChange= (e) => {
    const { currentTarget: input } = e;
    let 
     options = { ...this.props.options };
  
    options [input.name] = input.value;
   options.startIndex=this.props.startIndex
     console.log("Options CB", this.props.startIndex);

    this.props.onOptionChange (options);
    };
    updateCBs = (inpValues, checked, value) => {
    let inpArr = inpValues? inpValues.split(","): []; if (checked) inpArr.push(value);
    else {
let index = inpArr.findIndex ((ele) => ele === value);
if (index >= 0) inpArr.splice (index, 1);
}
console.log(inpValues, inpArr);
 return inpArr.join(",");
};
makeDropdown = (arr, value, name, label) =>(
<div className="form-group">
<select
className="form-control"
name={name} value={value}
onChange={this.handleChange}>
    
<option value="">{label}</option>
{arr.map((opt) => (
<option>{opt}</option>
))}
</select>
</div>
)
makeCheckboxes = (arr, value, name, label) =>(
<React.Fragment>

    <b>
<label className="form-check-label font-weight-bold border col-12">{label}</label></b>

{arr.map((opt) => (
<div className="form-check border col-12">
   
<input
className="form-check-input "
value={opt}
type="radio"
name={name}
checked={value} 
onChange={this.handleChange}
/>

<label className="form-check-label">{opt}</label>
</div>
))}
</React.Fragment>
);
render() {
    let { langRestrict="" ,orderBy='',Filter} = this.props.options;
    let{ countries,order,printType,filterdata ,options} = this.props; 
    console.log(options)
    return (
    <div className="row  ">
      
       <br />
      
       
    <div className="col-12 bg-light">
    <label className="form-check-label font-weight-bold border col-12">{countries.length==0?"":'languages'}</label>
    {countries.map((opt) => (
<div className="form-check border col-12">
   
<input
className="form-check-input "
value={opt.value}
type="radio"
name="langRestrict"
checked={options.langRestrict==opt.value}
onChange={this.handleChange}
/>

<label className="form-check-label">{opt.tittle}</label>
</div>
))}
   
    </div>  
    <br />
    <div className="row"></div>
    <br />
    
    <div className="col-12 bg-light">
    
    <label className="form-check-label font-weight-bold border col-12">{filterdata.length==0?"":'Filter'}</label>
    {filterdata.map((opt) => (
<div className="form-check border col-12">
   
<input
className="form-check-input "
value={opt.key}
type="radio"
name="filter"
checked={options.filter==opt}
onChange={this.handleChange}
/>

<label className="form-check-label">{opt.tittle}</label>
</div>
))}
    </div>
    <br />
    <div className="row"></div>
    <br />
     <div className="col-12 bg-light">
    <label className="form-check-label font-weight-bold border col-12">{printType.length==0?"":"Print Type"}</label>
    {printType.map((opt) => (
<div className="form-check border col-12">
   
<input
className="form-check-input "
value={opt}
type="radio"
name="printType"
checked={options.printType==opt}

onChange={this.handleChange}
/>

<label className="form-check-label">{opt}</label>
</div>
))}
    </div>
    <br />
    <div className="col-12 bg-light">
       <div className="form-group">
        <b> <label value="">{order.length==0?"":"orderBy"}</label></b>
     
       
       
<select
className="form-control"
name='orderBy' 
value={orderBy}

onChange={this.handleChange}>
    

{order.map((opt) => (
<option>{opt}</option>
))}
</select>
</div>
       </div>
 
    </div>)}}
    export default OptionsCB