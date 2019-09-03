import React from "react";
import styles from "./Login.module.css";
import * as axios from 'axios';
import {reduxForm, Field} from 'redux-form';
import Textarea from './../common/FormControls';
import {required, maxLengthCreator, minLengthCreator} from './../../utils/validations/validators';

const maxLength = maxLengthCreator(15);
const minLength = minLengthCreator(2);

 const  TextAreaForm =(props)=>{
 		
 		return(
		 		<form onSubmit={props.handleSubmit}>
		 			<div>
		 				<Field  name ='newMessageBody'  placeholder='Enter your message' validate={[required, maxLength, minLength ]} component ={Textarea} />
		 			</div>
		 			<div>
		 				<button> Log In </button>
		 			</div>
		 		</form>
		)
}	


const  AddMessageForm =reduxForm({
	form: 'dialogAddMessageForm'
})(TextAreaForm);



// const  AddMessageForm =(props)=>{
// 		const onSubmit =(formData)=>{
// 			console.log(formData);
// 		}
//  		return(
// 			<div>
// 				<h1> TEXTAREA </h1>
// 		 		<TextAreaReduxForm onSubmit={onSubmit} />
// 			</div>
// 		)
// }	


/*
// const  AddMessageForm =(props)=>{
// 	return(
// 		<form onSubmit = {props.handleSubmit} >
// 			<div>
// 			 	<Field  name ='newMessageBoby'  placeholder='Enter your message' component ={Textarea} />
// 			</div>

// 			 			<div>
// 			 				<button> Log In </button>
// 			 			</div>
// 		</form>
// 	)	
// }	
*/

export default AddMessageForm;

