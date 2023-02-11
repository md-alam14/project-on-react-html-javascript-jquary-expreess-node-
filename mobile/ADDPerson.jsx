import React ,{Component} from "react";
import http from "./httpServer";
class ADDmobiles extends Component{
    state = { mobiles: {name:"",price:'',brand:'',ram:'',rom:'',os:''},
     cities: ["32GB", "64GB", "128GB", "256GB"], 
     os:["Android", "iOS"],
     brands: ["Samsung", "Xiaomi", "Realme", "Apple"], 
     ram: ["3GB", "4GB", "6GB", "8GB"], edit: false,
     read:""
};
async componentDidMount() {
this.fetchData();
}
async fetchData() {
    let {id} = this.props.match.params;
    console.log("id",this.props.match.params
    )
if (id) {
let response = await http.get(`/svr/addmobile/${id}`);
let {data} = response;
let {rows}=data
console.log(response)
this.setState({ mobiles:rows[0], edit: true });
} else {
let mobiles = {name:"",price:'',brand:'',ram:'',rom:'',os:''}

this.setState({ mobiles: mobiles, edit: false });
};}
    handleChange = (e) => { const { currentTarget: input } = e;
    let s1 = {...this.state };
    s1.mobiles[input.name] = input.value;
    this.setState(s1);
    };
        async postData(url, obj) {
            let response = await http.post(url, obj);
             console.log(response);
            this.props.history.push("/svr/mobile");
            }
            componentDidUpdate(prevProps,prevState){
                if(prevProps!==this.props)
                this.fetchData()
            }
        async putData(url, obj) {
            let response = await http.put(url, obj);
             console.log(response);
            this.props.history.push("/svr/mobile");
            }
            handleSubmit = (e) => {
            e.preventDefault();
            let { mobiles, edit } = this.state;
            let {id} = this.props.match.params;
            console.log(mobiles)
             edit==true
? this.putData(`/svr/mobile/${id}`,mobiles) 
:this.postData(`/svr/mobile`,mobiles);}
    render(){
let {mobiles,cities,read,brands,edit,ram,os} = this.state;
edit==true?read="readonly":read=""

return (

<div className="container">
     <h5>{edit==true?"edit Details":"Enter Details of New mobile"}</h5>

<div className="form-group">



<label>Name</label>

<input

type="text"

id="name"

name="name"

className="form-control" placeholder="Enter  name" onChange={this.handleChange}

value={mobiles.name}></input>
<br />
<label>price</label>

<input

type="text"

id="price"

name="price"

className="form-control" placeholder="Enter  price" onChange={this.handleChange}

value={mobiles.price}></input>
<br />

<select
    className="form-control"
    name='brand'
    value={mobiles.brand}
    onChange={this.handleChange}>
    <option value="">Select brand </option>
    {brands.map((pr) => (
    <option value={pr}>{pr}</option>
    ))}
    </select>
<br />
<select
    className="form-control"
    name='ram'
    value={mobiles.ram}
    onChange={this.handleChange}>
    <option value="">Select ram </option>
    {ram.map((pr) => (
    <option value={pr}>{pr}</option>
    ))}
    </select>
<br />

<select
    className="form-control"
    name='rom'
    value={mobiles.rom
}
    onChange={this.handleChange}>
    <option value="">Select rom </option>
    {cities.map((pr) => (
    <option value={pr}>{pr}</option>
    ))}
    </select>
<br />

<select
    className="form-control"
    name='os'
    value={mobiles.os}
    onChange={this.handleChange}>
    <option value="">Select os </option>
    {os.map((pr) => (
    <option value={pr}>{pr}</option>
    ))}
    </select>
<br />




</div>


<button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit?"Update":"Submit"}</button>
</div>)
    }
}
export default ADDmobiles;