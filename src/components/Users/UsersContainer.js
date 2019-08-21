 import React from "react";
 //import * as axios from 'axios';
 import {connect} from 'react-redux';
 import {follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers} from './../../redux/usersReducer';
 import Users from "./Users";
 import Preloader from './../common/Preloader';
 import {withAuthRedirect} from './../../hoc/withAuthRedirect';
 import {compose} from 'redux';
 import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingInProgress} from  './../../redux/usersSelectors';


class  UsersAPIContainer extends React.Component{
 	
 	componentDidMount(){
 			this.props.requestUsers(this.props.currentPage, this.props.pageSize);
 			// this.props.toggleIsFetching(true);
	 		// requestUsers(this.props.currentPage, this.props.pageSize).then(data=>{
	 		// 	 			console.log('внатуре аксиос в порядке ', data.items);
	 		// 	 this.props.toggleIsFetching(false);
	 		// 	 this.props.setUsers(data.items);
	 		// 	 this.props.setTotalUsersCount(data.totalCount);
	 		// });	
 	}

 	onPageChanged =(pageNumber)=>{
	 		this.props.requestUsers(pageNumber, this.props.pageSize);
 	}

 	render(){
	console.log(this.props);

 		return(
 			<>
 				{this.props.isFetching ? <Preloader />  : null}
				<Users  totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageChanged={this.onPageChanged}
						users={this.props.users}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
						//toggleFollowingInProgress={this.props.toggleFollowingInProgress}
						isFollowingInProgress={this.props.isFollowingInProgress}

				/>
			
			</>	
		)
	}
}	

/*
// let mapStateToProps =(state)=>{
// 	return{
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		isFollowingInProgress: state.usersPage.isFollowingInProgress
// 	}
// }	
*/

let mapStateToProps =(state)=>{
	return{
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		isFollowingInProgress: getIsFollowingInProgress(state)
	}
}	



export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers })
)(UsersAPIContainer)


