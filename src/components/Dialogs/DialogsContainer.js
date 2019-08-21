import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {compose} from 'redux';



let mapStateToProps =(state)=>{
	console.log(state.auth.isAuth);
	return {
		dialogsPage: state.dialogsPage
		//isAuth: state.auth.isAuth
	}
}

// let mapStateToPropsForRedirect =(state)=>{
// 	return {
// 		isAuth: state.auth.isAuth
// 	}
// }

let mapDispatchToProps =(dispatch)=>{
	return {
		updateNewMessageBody: (body)=>dispatch(updateNewMessageBodyCreator(body)),
		sendMessage: (body)=>dispatch(sendMessageCreator(body))
	}
}

// let AuthRedirectComponent  = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);