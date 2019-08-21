import React from "react";
import styles from "./Login.module.css";
import * as axios from 'axios';
import {reduxForm, Field} from 'redux-form';
import Textarea from './../common/FormControls';

 const  TextAreaForm =(props)=>{
 		
 		return(
			<div>
				<h1> TEXTAREA </h1>
		 		<form onSubmit={props.handleSubmit}>
		 			<div>
		 				<Field  name ='newMessageBoby'  placeholder='Enter your message' component ={Textarea} />
		 			</div>
		 			
		 			<div>
		 				<button> Log In </button>
		 			</div>
		 		</form>
			</div>
		)
}	

const TextAreaReduxForm =reduxForm({
	form: 'login'
})(TextAreaForm);



const  AddMessageForm =(props)=>{
		const onSubmit =(formData)=>{
			console.log(formData);
		}
 		return(
			<div>
		 		<TextAreaReduxForm onSubmit={onSubmit} />
			</div>
		)
}	

export default AddMessageForm;

