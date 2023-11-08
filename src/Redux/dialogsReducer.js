const SEND_MESSAGE = 'SEND-MESSAGE'

let initiallState = {
  dialogs:[
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra" },
        { id: 3, message: "Youtttttt" },
        { id: 4, message: "You" },
        { id: 5, messge: "You" },
        
      ],
}

const dialogsReducer = (state = initiallState, action) => {

   switch(action.type){
      case SEND_MESSAGE:
        let body = action.newMessageBody
        return {
          ...state,
          messages:[...state.messages, {id:6, message: body}],
        };
        //stateCopy.newMessageBody ='';
        //stateCopy.messages.push({id:6, message: body})
      
      default:
        return state;
}
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE , newMessageBody});

export default dialogsReducer;