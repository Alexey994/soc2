import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
 /* _state : {
    profilePage:{
      posts :[
          { id: 1, message: "Hi , how are you", likeCount:12 },
          { id: 2, message: "How is your it-kamasutra" , likeCount:20 },
          { id: 3, message: "Hello" , likeCount:12 },
          { id: 4, message: "How is your i" , likeCount:20 }
          ],
          newPostText: 'it-kamasutra',
  },
    dialogsPage:{
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
            newMessageBody:''
  },
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
      newMessageBody:''
  },*/

  getState(){
    return this._state;
  },

  subscribe(observer){
    this._callSubscriber = observer;
     },

   _callSubscriber() {
    console.log('State was chaNGED');
  },
 
dispatch(action){

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._state.sidbaer = sidebarReducer(this._state.sidbaer, action);
  this._callSubscriber(this._state);

    }

}

 export default store