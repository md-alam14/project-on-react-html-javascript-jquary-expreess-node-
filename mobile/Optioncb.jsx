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
        <div className="form-check">
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
       
        let { brand='', ram='', rom='', hardDisk='', rating=''} = this.props.options;
        let{allOptions} = this.props;
        return (
        <div className="row border bg-light">
            <div className="col-12 text-center">
   
    </div>
        <div className="col-12 m-2">
        {this.makeCheckboxes (allOptions.brand, brand.split(','), "brand", "Select Brand")}
        </div>
        <div className="col-12 m-2">
        {this.makeCheckboxes(allOptions.ram, ram.split(','), "ram", "Select RAM")}
        </div>
        <div className="col-12 m-2">
        {this.makeCheckboxes(allOptions.rom, rom.split(','), "rom", "Select Rom")}
        </div>
       
        </div>
        )}}
        export default LeftPanelOptionscb;