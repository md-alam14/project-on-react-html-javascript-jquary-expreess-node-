import React ,{Component} from "react";
import http from "./httpServer";
class ADDPerson extends Component{
    state = { person: {},
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
let person = {}

this.setState({ person: person, edit: false });
};}
    handleChange = (e) => { const { currentTarget: input } = e;
    let s1 = {...this.state };
    s1.person[input.name] = input.value;
    this.setState(s1);
    };
        async postData(url, obj) {
            let response = await http.post(url, obj); console.log(response);
            this.props.history.push("/shops/view");
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
      this.postData("/shops", person);}
    render(){

let {person,cities,read,grade,edit} = this.state;
edit==true?read="readonly":read=""
console.log(person[0])
return (

<div className="container">
     <h5>Enter Details of New Shop</h5>

<div className="form-group">



<label>Shop Name</label>

<input

type="text"

id="name"

name="name"

className="form-control" placeholder="Enter  name" onChange={this.handleChange}

value={person.name}></input>
<br />
<label>Rent</label>

<input

type="text"

id="salary"

name="rent"

className="form-control" placeholder="Enter rent" onChange={this.handleChange}

value={person.salary}></input>
<br />

<br />
</div>
<button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit?"Update":"Submit"}</button>
</div>)
    }
}
export default ADDPerson;