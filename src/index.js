
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';



let rerenderEntireTree =()=>{

	ReactDOM.render(
		<BrowserRouter  >
			<Provider store={store}>
				<App  />
			</Provider>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();		

store.subscribe(() =>{
	rerenderEntireTree();
});







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
