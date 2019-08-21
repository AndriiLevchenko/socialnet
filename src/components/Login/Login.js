import React from "react";
import styles from "./Login.module.css";
import * as axios from 'axios';
import {reduxForm, Field} from 'redux-form';

 const  LoginForm =(props)=>{
 		
 		return(
			<div>
				<h1> LOGIN </h1>
		 		<form onSubmit={props.handleSubmit}>
		 			<div>
		 				<Field placeholder ={'Логин'} name ={'Login'} component={'input'} />
		 			</div>
		 			<div>
		 				<Field placeholder ={'Пароль'} name ={'Password'} component={'input'} />
		 			</div>
		 			<div>
		 				<Field type={'checkbox'} name ={'rememberMe'} component={'input'} /> Remember me
		 			</div>
		 			<div>
		 				<button> Log In </button>
		 			</div>
		 		</form>
				
			</div>
		)
}	

const LoginReduxForm =reduxForm({
	form: 'login'
})(LoginForm);



const  Login =(props)=>{
		const onSubmit =(formData)=>{
			console.log(formData);
		}
 		return(
			<div>
				<h1> Login </h1>
		 		<LoginReduxForm onSubmit={onSubmit} />
			</div>
		)
}	

export default Login;

