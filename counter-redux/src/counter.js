import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "./action/count-action"
class Counter extends Component{

	render(){
		const {count,AddOne,AddFive,AddTen}=this.props
		return(
			<div>
				<button onClick={(e)=>AddOne()}>+1</button>
				<button onClick={(e)=>AddFive()}>+2</button>
				<button onClick={(e)=>AddTen()}>+3</button>
				<div>{count}</div>
			</div>
			)
	}
}
function mapStateToProps(state){
	return{
		count:state
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
