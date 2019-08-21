import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import AddMessageForm from './../Login/TextArea';


const DialogItem =(props)=>{
	let path='dialogs/' + props.id;
	return(
		<div className={s.dialog + ' ' + s.active}>
					<NavLink to={path}> {props.name} </NavLink>
		</div>
	)
}

const Message =(props)=>{
	return(
		<div className = {s.message}>
				{ props.message }
		</div>
	)	
}

const Dialogs =(props)=>{

	let state = props.dialogsPage;

	console.log(props);

	let dialogsElements=state.dialogs.map(d => <DialogItem name={d.name} key={d.id} />);
	let messagesElements=state.messages.map( m => <Message message={m.message} key={m.id} />);
	let newMessageBody=state.newMessageBody;

	let onSendMessageClick =()=>{
		props.sendMessage();
	}

	let onNewMessageChange =(e)=>{
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}


	if(!props.isAuth) return <Redirect to={'/login'}  />
	
	
	return(
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<h4> Dialogs </h4>
				{dialogsElements}
				
			</div>
			<div className={s.messages}>
				<h4> Messages </h4>
				<div> {messagesElements} </div>
				<div>
					<div> 
						<AddMessageForm />
					</div>
					<div>
						{false && <button onClick={onSendMessageClick} >Send</button>}
					</div>
				</div>

			
			</div>
		</div>
	)
}

export default Dialogs;