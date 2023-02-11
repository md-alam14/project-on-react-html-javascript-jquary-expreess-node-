import React, { Component } from "react";
import {Link} from "react-router-dom"
class Lecture extends Component {
render() {
const { emps} = this.props;
const { courseName,Id} = this.props.match.params;
let lecture = emps.find((lect) =>lect.id===Id);
console.log(lecture)
return (
<React.Fragment>
<h2>
Employee details
</h2>
<b>
<h4>EMP Id: {lecture.id}</h4>
<h4>NAME : {lecture.name}</h4>

<h4>DEPARTMENT :<Link to={`/dept/${lecture.dept}`}>{lecture.dept}</Link> </h4>
<h4>DESINGNATION : {lecture.designation}</h4></b>
</React.Fragment>
);
}}
export default Lecture;