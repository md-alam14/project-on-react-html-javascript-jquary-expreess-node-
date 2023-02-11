import React, { Component } from "react"; 
class LeftPanelOptionscb extends Component {
    handleChange = (e) => {
        let { currentTarget: input } = e;
        let options = {...this.props.options };
        //options.name==="brand"
        options[input.name] = this.updateCBs( options [input.name],
        input.checked,
        input.value
        );
        this.props.onOptionChange(options)
        };
        updateCBs = (inpValue, checked, value) => {
        let inpArr = inpValue ? inpValue.split(",") : [];
        if (checked) inpArr.push(value);
        else {
        let index = inpArr.find((ele) => ele === value);
        if (index >= 0) inpArr.splice (index, 1);
        }
        return inpArr.join(",")}

        makeCheckboxes = (arr, values, name, label) =>(
        <React.Fragment>
        <label className="form-check-label font-weight-bold">{label}</label>
        {arr.map((opt) => (
        <div className="form-check" key={opt.toString()}>
        <input
        className="form-check-input"
        value={opt}
        type="checkbox"
        name={name}
        checked={values.find((val) => val === opt)} onChange={this.handleChange}/>
        <label className="form-check-label">{opt}</label>
        </div>))}
        </React.Fragment>
        );

    render() {
       
        let { dept='', designation=''} = this.props.options;
        let dept1=["Technology","Marketing","Finance", "HR","Operations",]
let desing=["Manager","Vice President","Trainee", "Executive",]
    
        return (
        <div className="row border bg-light">
            <div className="col-12 text-center">
    <button
    className="btn btn-primary btn-sm mt-2 mb-2"
    onClick={() => this.props.onOptionChange({})}>
    Clear All Options
    </button>
    </div>
        <div className="col-12 m-2" key={dept1}>
        {this.makeCheckboxes (dept1, dept.split(','), "dept", "Select dept")}
        </div>
        <div className="col-12 m-2">
        {this.makeCheckboxes(desing, designation.split(','), "designation", "Select designation")}
        </div>
       
        </div>
        )}}
        export default LeftPanelOptionscb;