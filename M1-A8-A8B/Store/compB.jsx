import React, { Component } from "react";
class CompB extends Component {
state = { counter: 0 };
increment = () => {
this.setState({ counter: this.state.counter + 1 });
};
componentDidMount() {
    const { counter} = this.state;
const {name} = this.props.match.params;
    console.log(`BBBB:componentDidMount: componentDidUpdate :counter:= ${this.state.counter}:name:= ${name}`)
}
componentDidMount(prevProps,prevState) {
    const { counter} = this.state;
const {name} = this.props.match.params;
    console.log(`BBBB:componentDidMount: componentDidUpdate :counter:= ${this.state.counter}:name:= ${name}`)
    
    
}
componentDidUpdate(prevProps,prevState) {
    const { counter} = this.state;
const {name} = this.props.match.params;
    console.log(`BBBB:componentDidUpdate: componentDidUpdate :counter:= ${this.state.counter}:name:= ${name}`)
    if(prevProps.match.params.name !==name)
    this.setState({counter:0})
    
}
componentWillMount(){
    const { counter} = this.state;
const {name} = this.props.match.params;
    console.log(`BBBB:componentWillMount: componentWillMount :counter:= ${this.state.counter}:name:= ${name}`)
}
shouldComponentUpdate(prevProps,prevState){
    const { counter} = this.state;
const {name} = this.props.match.params;
    console.log(`BBBB:shouldComponentUpdate: shouldComponentUpdate :counter:= ${this.state.counter}
    :name:= ${name}`)
    return true

}
render() {
const { counter} = this.state;
const {name} = this.props.match.params;
console.log(`BBBB:render: render :counter:= ${counter}:name:= ${name}`)
return (
<div className="container bg-primary text-white">
Component BBBB <br /> Counter {counter}
<button
className="btn btn-danger btn-sm ml-3"
onClick={() => this.increment()}>
Increment
</button>
<br />
Name: {name}
</div>
);
}}
export default CompB