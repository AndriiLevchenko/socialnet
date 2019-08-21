
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';


let store={
	_state: {
		profilePage: {
			posts: [{ id: 1, message: 'привет внатуре я первый пост',  likesCount: 3}, { id: 2, message: 'привет внатуре я второй пост',  likesCount: 34}, { id: 3, message: 'привет внатуре я пост очередной',  likesCount: 23}, { id: 4, message: 'привет внатуре я  пост вообще неищвестного автора',  likesCount: 12}, { id: 5, message: 'привет внатуре я  пост типа последний',  likesCount: 0}],
			newPostText: 'какой-то текст внатуре'
		},
		dialogsPage: {
			dialogs: [{id: 1, name: 'Israel'}, {id: 2, name: 'Veniamin'}, {id: 3, name: 'Moises'}, {id: 4, name: 'Naham'}, {id: 5, name: 'Ibragim'}, {id: 6, name: 'Mukhaiman'}, {id: 7, name: 'Mohammad'}, {id: 8, name: 'Abdullah'}],
			messages: [{id: 1, message: 'Привет внатуре'}, {id: 2, message: 'ну че там как дела?'}, {id: 3, message: 'Лебедев приехал с Греции'}, {id: 4,message: 'Коли знову у відпустку'}, {id: 5, message: 'Не хочу по рассчету'}],
			newMessageBody: '' 
		},
		sidebar: {}
	},
	getState(){
			return  this._state;
	},
	_callSubscriber(){
		console.log('state изменен');
	},
	subscribe (observer){
		this._callSubscriber = observer;
	},
																				// addPost(){
																				// 	let newPost={
																				// 		id: Math.random(),
																				// 		message: this._state.profilePage.newPostText,
																				// 		likesCount: 0
																				// 	}
																				// 	this._state.profilePage.posts.push(newPost);
																				// 	this._state.profilePage.newPostText = '';
																				// 	this._callSubscriber(this._state);
																				// },
																				// updateNewPostText(newText){
																				// 	this._state.profilePage.newPostText = newText;
																				// 	this._callSubscriber(this._state);
																				// },

	

	dispatch(action){

		this._state.profilePage = profileReducer(this._state.profilePage, action);	
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);	
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);																		

		
		this._callSubscriber(this._state);
		
	}
}




export default store;



window.store = store;