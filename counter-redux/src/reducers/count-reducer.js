import * as types from "./../constants/count-const";
function CounterReducer(state=0,action){
	if(action.type===types.PLUS_ONE){
		return state +1
	}
	else if(action.type===types.PLUS_FIVE){
		return state +5
	}
		else if(action.type===types.PLUS_TEN){
		return state +10
	}
	return state
}
export default CounterReducer