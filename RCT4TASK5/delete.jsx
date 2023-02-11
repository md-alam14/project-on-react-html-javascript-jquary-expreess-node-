import React ,{Component} from "react";
import http from "./httpServer";
class DeletePerson extends Component {
async componentDidMount() {
const {empCode} = this.props.match.params;

let response = await http.deleteApi(`/svr/Employees/${empCode}`);
 this.props.history.push("/svr/Employees");
 console.log(empCode)
}
render() {
return "";
}
}
export default DeletePerson;