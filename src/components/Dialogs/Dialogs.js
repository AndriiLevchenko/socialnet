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

let addNewMessage =(values)=>{
	props.sendMessage(values.newMessageBody);
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
						<AddMessageForm onSubmit = {addNewMessage} />
					</div>
				
				</div>

			
			</div>
		</div>
	)
}

export default Dialogs;