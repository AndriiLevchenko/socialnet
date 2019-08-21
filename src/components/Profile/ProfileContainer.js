 import React from "react";
 import {connect} from 'react-redux';
 import {withRouter} from 'react-router-dom';
 import {getUserProfile, getStatus, updateStatus } from './../../redux/profileReducer';
 import Profile from './Profile';
 import {withAuthRedirect} from './../../hoc/withAuthRedirect';
 import {compose} from 'redux';

 class ProfileContainer extends React.Component {

	componentDidMount(){
			let userId = this.props.match.params.userId;
			if(!userId){userId = 2;}
 			this.props.getUserProfile(userId);
 			this.props.getStatus(userId);
 	}


 	render(){
 		
		return(
				<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
		)
	}	
}
	
// let mapStateToPropsForRedirect =(state)=>({
//  	isAuth: state.auth.isAuth
// });
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);


let mapStateToProps =(state)=>({
 	profile: state.profilePage.profile,
 	status: state.profilePage.status
});
// let AuthRedirectComponent  = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),  withRouter, withAuthRedirect)(ProfileContainer)