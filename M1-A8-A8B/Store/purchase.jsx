import React ,{Component} from "react";
import http from "./httpServer";
class ADDPro extends Component{
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
let response = await http.get(`/purchases/add/${productid}`);
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
            this.props.history.push("/purchases/view");
            }
            componentDidUpdate(prevProps,prevState){
                if(prevProps!==this.props)
                this.fetchData()
            }
     
            handleSubmit = (e) => {
            e.preventDefault();
            let { person, edit } = this.state;
           
      this.postData("/purchases", person);}
    render(){
     
let {person,cities,read,grade,edit} = this.state;
edit==true?read="readonly":read=""
console.log(person[0])

return (

<div className="container">
     <h5>Enter Details of New Shop</h5>

<div className="form-group">

<label>shopId</label>

<input

type="text"

id="shopId"

name="shopId"

className="form-control" placeholder="Enter  shopId" onChange={this.handleChange}

value={person.shopId} readOnly={read}></input>
<br />
<label>productid</label>

<input

type="text"

id="productid"

name="productid"

className="form-control" placeholder="Enter  productid" onChange={this.handleChange}

value={person.productid} readOnly={read}></input>
<br />
<label>price</label>

<input

type="text"

id="quantity"

name="quantity"

className="form-control" placeholder="Enter quantity" onChange={this.handleChange}

value={person.quantity}></input>
<br />

<br />
<label>price</label>

<input

type="text"

id="price"

name="price"

className="form-control" placeholder="Enter price" onChange={this.handleChange}

value={person.price}></input>
<br />

<br />
</div>
<button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit?"Update":"Submit"}</button>
</div>)
    }
}
export default ADDPro;