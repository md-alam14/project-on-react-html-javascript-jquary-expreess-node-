import React ,{Component} from "react";
import http from "./httpServer";
class DeletePerson extends Component {
async componentDidMount() {
const {id} = this.props.match.params;

let response = await http.deleteApi(`/svr/mobile/${id}`);
 this.props.history.push("/svr/mobile");
 console.log(id)
}
render() {
return "";
}
}
export default DeletePerson;