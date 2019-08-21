 import {usersAPI} from './../api/api';


const FOLLOW ='FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
	users: [],
	pageSize: 16,
	totalUsersCount: 211,
	currentPage: 1,
	isFetching: false,
	isFollowingInProgress: [],
	// users: [
	// 		{ id: 6, followed: true, fullName: 'Mikhail',  status: 'внатуре', location: {city: 'Kyiv', country: 'Ukraine'}, fotoUrl: 'http://top-antropos.com/images/13/Kirgizki/%D0%9C%D0%B0%D0%B9%D1%8F%20%D0%90%D0%B1%D0%B8%D0%B1%D0%BE%D0%B2%D0%B0.jpg'  }, 
	// 		{ id: 1, followed: false, fullName: 'Dmitrii',  status: 'внатуре', location: {city: 'Minsk', country: 'Belorussia'}, fotoUrl:  'https://cdn.pixabay.com/photo/2016/04/10/21/34/woman-1320810__340.jpg'   }, 
	// 		{ id: 2, followed: true, fullName: 'Mikhail',  status: 'внатуре', location: {city: 'Kyiv', country: 'Ukraine'}, fotoUrl: 'https://look.com.ua/pic/201401/1920x1200/look.com.ua-90028.jpg' }, 
	// 		{ id: 3, followed: false, fullName: 'Oleg',  status: 'внатуре', location: {city: 'Zhitomir', country: 'Ukraine'}, fotoUrl: 'https://cdn.pixabay.com/photo/2016/07/18/10/16/model-1525629_1280.jpg'   },
	// 		{ id: 4, followed: true, fullName: 'Ursa',  status: 'внатуре', location: {city: 'Ulan-bator', country: 'Mongolia'}, fotoUrl:  'https://cdn.pixabay.com/photo/2016/06/17/09/53/hair-1462984__340.jpg'   },
	// 		{ id: 5, followed: true, fullName: 'Vanya',  status: 'внатуре', location: {city: 'Moskow', country: 'Moskovia'}, fotoUrl:   'https://cdn.pixabay.com/photo/2016/03/09/09/30/girl-1245835__340.jpg'   }
	// ],
	newPostText: 'какой-то текст внатуре'
}

const usersReducer = (state = initialState, action) =>{
		switch(action.type){
			case FOLLOW: 
				return {
					...state,
					users: state.users.map( u =>{ 
						if (u.id === action.userId){
							return {...u, followed: true}
						}
						return u;
					})
				}

			
			case UNFOLLOW:
				return {
					...state,
					users: state.users.map( u =>{ 
						if (u.id === action.userId){
							return {...u, followed: false}
						}
						return u;
					})
				}
			case SET_USERS:
				return {
					 ...state, users: action.users
				}
			case SET_CURRENT_PAGE:
				return{
					...state, currentPage: action.currentPage
				}
			case SET_TOTAL_USERS_COUNT:
				return{
					...state, totalUsersCount: action.totalUsersCount
				}
			case TOGGLE_IS_FETCHING:
				return{
					...state, isFetching: action.isFetching
				}	
			case TOGGLE_FOLLOWING_IN_PROGRESS:
				return{
					...state, 
					isFollowingInProgress: action.isFetching 
					? [...state.isFollowingInProgress, action.userId]
					: state.isFollowingInProgress.filter(id => id != action.userId)
				}
					

			default:
				return state;
			
				
		}
}

export const followSuccess =(userId)=>({ type: FOLLOW , userId})
export const unfollowSuccess =(userId)=>({ type: UNFOLLOW, userId})
export const setUsers =(users)=>({type: SET_USERS, users})
export const setCurrentPage =(currentPage)=>({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount =(totalUsersCount)=>({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching=(isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress=(isFetching, userId)=>({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

export const requestUsers =(currentPage, pageSize)=>{ 
	return (dispatch)=>{
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(currentPage));
 		usersAPI.getUsers(currentPage, pageSize).then(data=>{
 			 			console.log('внатуре аксиос в порядке ', data.items);
 			 dispatch(setCurrentPage(currentPage));
 			 dispatch(toggleIsFetching(false));
 			 dispatch(setUsers(data.items));
 			 dispatch(setTotalUsersCount(data.totalCount));
 		});	
	}
}

export const follow =(userId)=>{
	return (dispatch) =>{
		dispatch(toggleFollowingInProgress(true, userId));
		usersAPI.follow(userId).then(responce =>{
			if(responce.data.resultCode ==0){
				dispatch(followSuccess(userId));
			}
			dispatch(toggleFollowingInProgress(false, userId));
		})
	}
}
export const unfollow =(userId)=>{
	return (dispatch) =>{
		dispatch(toggleFollowingInProgress(true, userId));
		usersAPI.unfollow(userId).then(responce =>{
			if(responce.data.resultCode ==0){
				dispatch(unfollowSuccess(userId));
			}
			dispatch(toggleFollowingInProgress(false, userId));
		})
	}
}

export default usersReducer;