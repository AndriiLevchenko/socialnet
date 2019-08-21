import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator, minLengthCreator} from './../../../utils/validations/validators';
import Textarea from './../../common/FormControls';

const maxLength = maxLengthCreator(15);
const minLength = minLengthCreator(2);

const MyPosts =(props)=>{
 		let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}  likesCount={p.likesCount} />);

 			let newPostElement = React.createRef();

			let onAddPost =(values)=>{	
				props.addPost(values.newPostText);
			}

console.log(props.posts);
		return(
				<div className={s.cardImg}>
					<h3> My Posts </h3>
					
					<AddNewPostForm onSubmit ={onAddPost} />

					<div className={s.item}>
						<img src='https://look.com.ua/pic/201401/1920x1200/look.com.ua-90028.jpg'  alt=' ' />
						Post 1 внатуре без картинки
					</div>
					<div className={s.item}>
						<img src='http://www.kartinkijane.ru/pic/201502/1920x1200/kartinkijane.ru-81316.jpg'  alt=' ' />
						Post 2
					</div>
					{ postsElements }

				</div>
		)
}

function AddNewPostForm(props){
	return(
			<form onSubmit={props.handleSubmit} >
				<div>
					<Field  name='newPostText'  component={Textarea} placeholder={'Введи повідомлення'} validate={[required, maxLength, minLength ]} />
				</div>	
				<div>
					<button > Add Post </button>
				</div>
			</form>
	)
}
AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

 
 export default MyPosts;
