import Dialogs from './Dialogs';
import {sendMessageCreator} from './../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {compose} from 'redux';



let mapStateToProps =(state)=>{
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
		console.log('запускается mapDispatchToProps');
	return {
		sendMessage: (newMessageBody)=>dispatch(sendMessageCreator(newMessageBody))
	}
}

// let AuthRedirectComponent  = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);