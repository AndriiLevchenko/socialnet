
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer';
import {connect} from 'react-redux';

const mapStateToProps =(state)=>{
	return{
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
const mapDispatshToProps =(dispatch)=>{
	return{
		//updateNewPostText: (text)=>{dispatch(updateNewPostTextActionCreator(text)); },
		addPost: (newPostText)=> {dispatch(addPostActionCreator(newPostText)); }
	}
}


 const MyPostsContainer = connect(mapStateToProps, mapDispatshToProps)(MyPosts);

 export default MyPostsContainer;
