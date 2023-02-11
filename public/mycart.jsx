import React, { Component } from "react";
import Star from "./Stars";
class Cart extends React.Component{
   state={
cart:[]
    
   }
        render() {
          const {cart=[]} = this.props

    console.log(cart)
  
        return ( <React.Fragment>
      
            {this.state.cart===[]?<h1 className="text-center bg-info">Book are empty</h1>:
            <h1 className="text-center bg-info">All Book </h1>}
            {cart===[]?"":cart.map((pr,index) => (
                <div className="col-4 border" style={{background:"#32cd32"}}>
                  <img src={pr.volumeInfo.imageLinks.smallThumbnail} alt="" style={{margin:"20%"}}/> <br />
                  <b>{pr.volumeInfo.title}</b>,<b><br/>author:{pr.volumeInfo.authors},<br/></b>
                  <br />
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                  </div>
                  <button className="btn btn-secondary" onClick={()=>this.ADDto(index)}>
                  Add To MyBook</button>
                  </div>
        ))
   }
 </React.Fragment> )
    }}
export default Cart