const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [{id: 1, name: 'Israel'}, {id: 2, name: 'Veniamin'}, {id: 3, name: 'Moises'}, {id: 4, name: 'Naham'}, {id: 5, name: 'Ibragim'}, {id: 6, name: 'Mukhaiman'}, {id: 7, name: 'Mohammad'}, {id: 8, name: 'Abdullah'}],
	messages: [{id: 1, message: 'Привет внатуре'}, {id: 2, message: 'ну че там как дела?'}, {id: 3, message: 'Лебедев приехал с Греции'}, {id: 4,message: 'Коли знову у відпустку'}, {id: 5, message: 'Не хочу по рассчету'}]
};


const dialogsReducer = (state = initialState, action) =>{

		switch(action.type){
			case SEND_MESSAGE:
				let body = action.newMessageBody;
				let nextMessageNumber = state.messages.length + 1;
				console.log(body);
				return {
					...state,
					messages: [...state.messages, {id: nextMessageNumber, message: body}]
				}
			default:
				return state;
		}
}


export const sendMessageCreator =(newMessageBody)=>({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;