import React, { Component } from "react";

class Office1 extends Component {
render() {
const { offices} = this.props;
const { courseName, city} = this.props.match.params;
let office = offices.find((lect) =>lect.city===city);
console.log(office)
return (
<React.Fragment>

<h4>Welcome to the OFFICE  OF JX COMPANY IN { office.city}</h4>

<b>{   office.address}</b>
</React.Fragment>
);
}}
export default Office1;