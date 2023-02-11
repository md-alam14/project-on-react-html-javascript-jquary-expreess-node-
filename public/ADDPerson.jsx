import React ,{Component} from "react";
import http from "./httpServer";
class ADDPerson extends Component{
    state = { person: {"empCode":'',"name":"","department":"",
    "designation":"","salary":'',"gender":""},
     cities: ['VP', 'Manager', 'Trainee'], 
     grade: ['Finance', 'HR','Technology', 'Marketing',"Operations"], 
     course: ['VP', 'Manager', 'Trainee'], edit: false,
     read:""
};
async componentDidMount() {
this.fetchData();
}
async fetchData() {
    let {empCode} = this.props.match.params;
    console.log("empCode",this.props.match.params
    )
if (empCode) {
let response = await http.get(`/svr/addEmployees/${empCode}`);
let {data} = response;
let {rows}=data
console.log(response)
this.setState({ person:rows[0], edit: true });
} else {
let person = {"name":"","department":"",
"designation":"","salary":'',"gender":""}

this.setState({ person: person, edit: false });
};}
    handleChange = (e) => { const { currentTarget: input } = e;
    let s1 = {...this.state };
    s1.person[input.name] = input.value;
    this.setState(s1);
    };
        async postData(url, obj) {
            let response = await http.post(url, obj);
             console.log(response);
            this.props.history.push("/svr/Employees");
            }
            componentDidUpdate(prevProps,prevState){
                if(prevProps!==this.props)
                this.fetchData()
            }
        async putData(url, obj) {
            let response = await http.put(url, obj);
             console.log(response);
            this.props.history.push("/svr/Employees");
            }
            handleSubmit = (e) => {
            e.preventDefault();
            let { person, edit } = this.state;
            let {empCode} = this.props.match.params;
             edit==true
? this.putData(`/svr/Employees/${empCode}`,person) 
:this.postData("/svr/Employees",person);}
    render(){
let {person,cities,read,grade,edit} = this.state;
edit==true?read="readonly":read=""
console.log(person[0])
return (

<div className="container">
     <h5>{edit==true?"edit Details":"Enter Details of New Employees"}</h5>

<div className="form-group">



<label>Name</label>

<input

type="text"

id="name"

name="name"

className="form-control" placeholder="Enter  name" onChange={this.handleChange}

value={person.name}></input>
<br />
<label>Salary</label>

<input

type="text"

id="salary"

name="salary"

className="form-control" placeholder="Enter  salary" onChange={this.handleChange}

value={person.salary}></input>
<br />

<select
    className="form-control"
    name='department'
    value={person.department}
    onChange={this.handleChange}>
    <option value="">Select department </option>
    {grade.map((pr) => (
    <option value={pr}>{pr}</option>
    ))}
    </select>
<br />


<select
    className="form-control"
    name='designation'
    value={person.designation
}
    onChange={this.handleChange}>
    <option value="">Select Designation </option>
    {cities.map((pr) => (
    <option value={pr}>{pr}</option>
    ))}
    </select>
<br />
<label htmlFor="">Gender</label><br />
<div className="row">
    <div className="col-3"><input type="radio" name="gender" value='Male' checked={person.gender=== "Male"} onChange={this.handleChange}/> Male</div>
    <div className="col-3"><input type="radio" name="gender" value='Female' checked={person.gender==="Female"} onChange={this.handleChange}/> Female</div>
    <div className="col-6"></div>
</div>


</div>
<br />

<button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit?"Update":"Submit"}</button>
</div>)
    }
}
export default ADDPerson;