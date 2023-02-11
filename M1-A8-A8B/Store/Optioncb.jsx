import React, { Component } from "react"; 
class LeftPanelOptionscb extends Component {
    state={
        productid:[1,2,3,4,5,6,7,8],
      sort:[ 'st1','pr1','QtyAsc','QtyDesc','ValueAsc','ValueDesc']
    }
    handleChange = (e) => {
        let { currentTarget: input } = e;
        let options = {...this.props.options };
        input.name=="productid"?
        options[input.name] = this.updateCBs( options [input.name], input.checked, input.value):
        options[input.name] =input.value;
        console.log(options)
        this.props.onOptionChange(options)
        };
        updateCBs = (inpValue, checked, value) => {
        let inpArr = inpValue ? inpValue.split(",") : [];
        if (checked) inpArr.push(value);
        else {
        let index = inpArr.find((ele) => ele == value);
        if (index >= 0) inpArr.splice (index, 1);
        }
        return inpArr.join(",")}
        makeDropdown = (arr, values, name, label) =>(
            <div className="form-group">
            <select
            className="form-control"
            onChange={this.handleChange}
            name={name}
           >
                
            <option value="">{label}</option>
            {arr.map((opt) => (
            <option  
            value={opt}
            name={name}
             onChange={this.handleChange}>{opt}</option>
            ))}
            </select>
            </div>
            )
        makeCheckboxes = (arr, values, name, label) =>(
        <React.Fragment>
        <label className="form-check-label font-weight-bold">{label}</label>
        {arr.map((opt) => (
        <div className="form-check">
        <input
        className="form-check-input"
        value={opt}
        type="checkbox"
        name={name}
        checked={values.find((val) => val ==opt)} onChange={this.handleChange}/>
        <label className="form-check-label">{opt}</label>
        </div>))}
        </React.Fragment>
        );

    render() {
       
        let { productid='', sort='', shopid=''} = this.props.options;
        let{allOptions} = this.props;
        return (
        <div className="row border bg-light">
            <div className="col-12 text-center">
   
    </div>
        <div className="col-12 m-2">
        {this.makeCheckboxes (this.state.productid, productid.split(','), "productid", "Select productid")}
        </div>
        <div className="col-12 m-2">
     {this.makeDropdown(allOptions.shopid,shopid.split(','), "shopid", "Select shop")}
        </div>
        <div className="col-12 m-2">
        {this.makeDropdown(this.state.sort,sort.split(','), "sort", "Select sort")}
        </div>
       
        </div>
        )}}
        export default LeftPanelOptionscb;