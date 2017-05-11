import React, { Component } from 'react';
import { connect } from 'react-redux'
import style from "./count.css"

class App extends Component {
  addOne(){
    this.props.onAddOne(this.props.count)
  }
  addFive(){
    this.props.onAddFive(this.props.count)
  }
  addTen(){
      this.props.onAddTen(this.props.count)
  }
  render(){
    let count=this.props.counterStore
    return (
      <div>
        <button onClick={this.addOne.bind(this)}>+1</button>
        <button onClick={this.addFive.bind(this)}>+5</button>
        <button onClick={this.addTen.bind(this)}>+10</button>
        <ul>
          {
            <li className="li-count">{count}</li>
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state =>({
   counterStore:state
  }),
  dispatch =>({
   onAddOne:(plus)=>{
    dispatch({type:"ADD_ONE"})
   },
   onAddFive:(plus)=>{
    dispatch({type:"ADD_FIVE"})
   },
   onAddTen:(plus)=>{
    dispatch({type:"ADD_TEN"})
   }
  })
)(App);