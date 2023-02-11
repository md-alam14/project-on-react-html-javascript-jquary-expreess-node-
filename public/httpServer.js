import axios from "axios";
import MainComponent from "./MainComponent";
import Star from "./Stars";

const baseURL=`https://www.googleapis.com/books/v1/volumes?key=AIzaSyCuaubwdNux5Tp8i0Ub2q0E9AEa8DWbKiQ`;
function get(url) { return axios.get(baseURL + url);
}
function post(url, obj) { return axios.post(baseURL + url, obj); }
export default {
get,
post,
}