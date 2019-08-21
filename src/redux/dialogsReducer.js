const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [{id: 1, name: 'Israel'}, {id: 2, name: 'Veniamin'}, {id: 3, name: 'Moises'}, {id: 4, name: 'Naham'}, {id: 5, name: 'Ibragim'}, {id: 6, name: 'Mukhaiman'}, {id: 7, name: 'Mohammad'}, {id: 8, name: 'Abdullah'}],
	messages: [{id: 1, message: 'Привет внатуре'}, {id: 2, message: 'ну че там как дела?'}, {id: 3, message: 'Лебедев приехал с Греции'}, {id: 4,message: 'Коли знову у відпустку'}, {id: 5, message: 'Не хочу по рассчету'}],
	newMessageBody: '' 
};


const dialogsReducer = (state = initialState, action) =>{

		switch(action.type){
			case SEND_MESSAGE:
				let body = state.newMessageBody;
				let nextMessageNumber = state.messages.length + 1;
				return {
					...state,
					newMessageBody: '',
					messages: [...state.messages, {id: nextMessageNumber, message: body}]
				}
			case UPDATE_NEW_MESSAGE_BODY:
				return{
					...state,
					newMessageBody: action.body
				}
			default:
				return state;
		}
}


export const sendMessageCreator =()=>({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator =(body)=>({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;