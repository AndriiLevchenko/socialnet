import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware  from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
	profilePage: 	profileReducer,
	dialogsPage: 	dialogsReducer,
	sidebarPage:    sidebarReducer,
	usersPage:      usersReducer,
	auth: 			authReducer,
	form: 			formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;					

export default store;

				