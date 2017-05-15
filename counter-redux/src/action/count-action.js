import *as types from "./../constants/count-const"
export function AddOne(){
	return{
		type:types.PLUS_ONE
	};
}

export function AddFive(){
		return{
			type:types.PLUS_FIVE
		};
	}
	export function AddTen(){
		return{
			type:types.PLUS_TEN
		}
	}
