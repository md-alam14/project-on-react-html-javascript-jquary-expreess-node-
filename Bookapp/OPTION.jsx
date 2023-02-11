import React, { Component } from "react";
class ShowOptions extends Component{
handleChange = (e) => {
const { currentTarget: input } = e; 
let options= {...this.props.options };

options [input.name] = input.value;
this.props.onOptionChange(options);
}

render() {
let { dept = "", designation = ""} = this.props.options;
let dept1=["Technology","Marketing","Finance", "HR","Operations",]
let desing=["Manager","Vice President","Trainee", "Executive",]
return (
    <div className="row"> 
    <div className="col-12 m-2">
    <div className="form-group">
    <select
    className="form-control"
    name="dept"
    value={dept}
    onChange={this.handleChange}>
    <option value="">Select DEPARTMENT</option>
    {dept1.map((pr) => (
    <option>{pr}</option>
    ))}
    </select>
    </div>
    </div>
    <div className="col-12 m-2">
    <div className="form-group">
    <select
    className="form-control"
    name="designation"
    value={designation}
    onChange={this.handleChange}>
    <option value="">Select Designation</option>
    {desing.map((pr) => (
    <option>{pr}</option>
    ))}
    </select>
    </div>
    </div>
    
    </div>
    
)}
}
export default ShowOptions