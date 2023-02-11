import React ,{Component} from "react";

class NewEMPL extends Component{
    state ={
        storeinfo:this.props.storeinfo,
    };
    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state }
        input.name === "inStock"
        ? (s1.storeinfo [input.name] = input.checked)
        : (s1.storeinfo [input.name] = input.value);
        this.setState(s1);
        };
        handleSubmit = (e) => {
        e.preventDefault();
        this.props.onsubmit(this.state.storeinfo)
      
        this.props.history.push("/Employees");
        }
    render(){

let {storeinfo} = this.state;

return (

<div className="container">
    

<div className="form-group">

<label> id</label>

<input

type="text"

id="id"

name="id"

className="form-control" placeholder="Enter  id" onChange={this.handleChange}

value={storeinfo.id}></input>
<label> name</label>

<input

type="text"

id="name"

name="name"

className="form-control" placeholder="Enter name" onChange={this.handleChange}

value={storeinfo.name}></input>
<label> Department</label>

<input

type="text"

id="dept"

name="dept"

className="form-control" placeholder="Enter  dept" onChange={this.handleChange}

value={storeinfo.dept}></input>

<label>designation</label>

<input

type="text"

id="desingnation"

name="designation"

className="form-control" placeholder="Enter designation" onChange={this.handleChange}

value={storeinfo.designation}></input>


</div>
<br />

<br />
<button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit?"Update":"Submit"}</button>
</div>)
    }
}
export default NewEMPL;