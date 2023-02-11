import React ,{Component} from "react";
import http from "./httpServer";
class ADDProduct extends Component{
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
    let {productid} = this.props.match.params;
    console.log("productid",this.props.match.params)
if (productid) {
let response = await http.get(`/products/add/${productid}`);
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
            this.props.history.push("/products/view");
            }
            componentDidUpdate(prevProps,prevState){
                if(prevProps!==this.props)
                this.fetchData()
            }
        async putData(url, obj) {
            let response = await http.put(url, obj);
             console.log(response);
            this.props.history.push("/products/view");
            }
            handleSubmit = (e) => {
            e.preventDefault();
            let { person, edit } = this.state;
            let {productid} = this.props.match.params;
            console.log("productid",this.props.match.params
            )
            edit==true?
            this.putData(`/products/${productid}`, person):
      this.postData("/products", person);}
    render(){
     
let {person,cities,read,grade,edit} = this.state;
edit==true?read="readonly":read=""
console.log(person[0])
return (

<div className="container">
     <h5>Enter Details of New Shop</h5>

<div className="form-group">



{edit===true?<React.Fragment><label>product id</label>

<input

type="text"

id="productid"

name="productid"

className="form-control" placeholder="Enter  productid" onChange={this.handleChange}

value={person.productid} readOnly={read}></input>
<br /></React.Fragment>:""}
<label>product name</label>

<input

type="text"

id="productname"

name="productname"

className="form-control" placeholder="Enter  productname" onChange={this.handleChange}

value={person.productname} readOnly={read}></input>
<br />
<label>category</label>

<input

type="text"

id="category"

name="category"

className="form-control" placeholder="Enter category" onChange={this.handleChange}

value={person.category}></input>
<br />

<br />
<label>description</label>

<input

type="text"

id="description"

name="description"

className="form-control" placeholder="Enter description" onChange={this.handleChange}

value={person.description}></input>
<br />

<br />
</div>
<button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit?"Update":"Submit"}</button>
</div>)
    }
}
export default ADDProduct;