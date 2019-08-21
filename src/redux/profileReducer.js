
 import {usersAPI, profileAPI} from './../api/api';

const ADD_POST ='ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState = {
	posts: [{ id: 1, message: 'привет внатуре я первый пост',  likesCount: 3}, { id: 2, message: 'привет внатуре я второй пост',  likesCount: 34}, { id: 3, message: 'привет внатуре я пост очередной',  likesCount: 23}, { id: 4, message: 'привет внатуре я  пост вообще неищвестного автора',  likesCount: 12}, { id: 5, message: 'привет внатуре я  пост типа последний',  likesCount: 0}],
	//newPostText: 'какой-то текст внатуре',
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) =>{
		switch(action.type){
			case ADD_POST: {
				let newPost={
					id: Math.random(),
					message: action.newPostText,
					likesCount: 0
				}
				let stateCopy = {...state};
				stateCopy.posts = [...state.posts];
				stateCopy.posts.push(newPost);
				stateCopy.newPostText = '';
				return stateCopy;
			}	
			// case UPDATE_NEW_POST_TEXT: {
			// 	let stateCopy = {...state};
			// 	stateCopy.newPostText =  action.newText;
			// 	return stateCopy;
			// }	
			case SET_USER_PROFILE: {
				return {...state, profile: action.profile}
			}
			case SET_STATUS:{
				return {...state, status: action.status}
			}

			default:
				return state;
		}
}

export const addPostActionCreator =(newPostText)=>({ type: ADD_POST, newPostText });
//export const updateNewPostTextActionCreator =(text)=>({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile =(profile)=>({ type: SET_USER_PROFILE, profile });
export const setStatus =(status)=>({ type: SET_STATUS, status });
export const getUserProfile =(userId)=>(dispatch)=>{ 
		usersAPI.getProfile(userId).then(response=>{
	 			 dispatch(setUserProfile(response.data));
	 	})
}	
export const getStatus =(userId)=>(dispatch)=>{ 
		profileAPI.getStatus(userId).then(response=>{
	 			 dispatch(setStatus(response.data));
	 	})
}	
export const updateStatus =(status)=>(dispatch)=>{ 
		profileAPI.updateStatus(status).then(response=>{
			if(response.data.resultCode === 0){
	 			 dispatch(setStatus(status));
	 		}	 
	 	})
}	
 


export default profileReducer;