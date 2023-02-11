import React, { Component } from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import Lecture from "./Empnsame";
import Office1 from "./Officename";
import Employees1 from "./CoursePage";
import Office from "./Office";
import Employees from "./employee"
import Welcome from "./Welcome";
import NewEMPL from "./FORM";
import NavBar from "./Navbar";
class MainComponent extends Component {
  state ={
   
 
  emps: [{id: "JX103",name: "Jack Wilson",dept: "Technology",designation: "Manager",},
  {id: "JX125",name: "Mary Gomes",dept: "Operations",designation: "Vice President",},
  {id: "JX086",name: "George Mason",dept: "Finance",designation: "Trainee",},
  {id: "JX259",name: "Jim Smith",dept: "HR",designation: "Executive",},
  {id: "JX009",name: "Tim Watson",dept: "Marketing",designation: "Manager",},
  {id: "JX188",name: "Anna Gates",dept: "Technology",designation: "Trainee",},
  {id: "JX423",name: "Bob Andrews",dept: "Technology",designation: "Trainee",}
  ,{id: "JX525",name: "Ted Cotton",dept: "Technology",designation: "Vice President",},
  {id: "JX636",name: "William Smith",dept: "Finance",designation: "Executive",},
  {id: "JX749",name: "Billy Norton",dept: "Finance",designation: "Executive",},
  {id: "JX859",name: "Julia Smith",dept: "Marketing",designation: "Executive",},
  {id: "JX968",name: "Meg Conte",dept: "Technology",designation: "Trainee",},
  {id: "JX156",name: "Corey Andrews",dept: "Technology",designation: "Manager",},
  {id: "JX157",name: "Larry King",dept:"Operations",designation: "Manager",},
  {id: "JX058",name: "Michael Mason",dept: "Finance",designation: "Manager",},
  {id: "JX269",name: "Wally Smith",dept: "HR",designation: "Executive",},
  {id: "JX080",name: "Tara Reid",dept: "Marketing",designation: "Manager",},
  {id: "JX191",name: "Alfred Myers",dept: "Technology",designation: "Trainee",},],
  

 offices: [{id: 1,city: "SanFrancisco",address: "1600 Amphitheatre Pkwy, Mountain View, CA 94043",},
 {id: 2,city: "Bengaluru",address:"Swami Vivekananda Rd, Sadanandanagar, Bennigana Halli, Bengaluru",},
 {id: 3,city: "London",address: "Belgrave House, 76 Buckingham Palace Rd, Belgravia, London",},]
  }
  handleaddstore = (pr) => {
    let s1 = { ...this.state };
    s1.emps.push(pr);
    this.setState(s1);}
render() {
  const {lectures,emps,offices} = this.state;
  return(
  <div className="container">
  <NavBar />
  <Switch>
 
  <Route path="/Employees/1" render={(props) =><Employees {...props} emps={emps} />}/>
  <Route path="/emp" render={(props) =><NewEMPL {...props}  storeinfo={{}} onsubmit={this.handleaddstore} />}/>
  <Route path="/Employees/:page" render={(props) =><Employees {...props} emps={emps} />}/>
  <Route path="/dept/:dept" render={(props) =><Employees1 {...props} emps={emps} />}/>
  <Route path="/Offices" render={(props) =><Office {...props} offices={offices} />}/>
  <Route path="/adress/:city" render={(props) =><Office1 {...props} offices={offices} />}/>
  <Route path="/name/:Id" render={(props) =><Lecture {...props} emps={emps} />}/>
  <Route path="/" component={Welcome}/>

  <Redirect from="/" to="/welcome" />
  </Switch>
 </div>
  );
  }
  }
export default MainComponent;