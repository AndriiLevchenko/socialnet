//import {createSelector} from 'reselect';

export const getUsers =(state)=>{
	return  state.usersPage.users;
}

export const getPageSize =(state)=>{
	return state.usersPage.pageSize;
}

export const getTotalUsersCount =(state)=>{
	return state.usersPage.totalUsersCount;
}

export const getCurrentPage =(state)=>{
	return state.usersPage.currentPage;
}

export const getIsFetching =(state)=>{
	return state.usersPage.isFetching;
}

export const getIsFollowingInProgress =(state)=>{
	return state.usersPage.isFollowingInProgress;
}