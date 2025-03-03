 import {authAPI} from './../api/api';

const SET_AUTH_USER_DATA ='SET-AUTH-USER-DATA';


let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) =>{
		switch(action.type){
			case SET_AUTH_USER_DATA: 
			console.log(action.data);
				return {...state,
						...action.data,
						isAuth: true
				}	
			
			default:
				return state;
		}
}

export const setAuthUserData =(userId, email, login)=>({ type: SET_AUTH_USER_DATA, data: {userId, email, login} });
export const getAuthUserData =()=>(dispatch)=>{
	authAPI.me().then(response=>{
		console.log(response.data);
		if(response.data.resultCode===0){
			let {id, email, login} = response.data.data;
			dispatch(setAuthUserData(id, email, login));
		}
	 });	
}

export default authReducer;