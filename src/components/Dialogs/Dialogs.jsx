import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm";


//import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogsReducer";


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name = {d.name} key={d.id} id ={d.id} />
  ));

  let messagesElement = state.messages.map((m) => (
    <Message message = {m.message} key={m.id} />
  ));

let addNewMessage = (values) => {
  props.sendMessage(values.newMessageBody)
  alert(values.newMessageBody)
}

if(!props.isAuth) return <Navigate to={'/login'}/>;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div>
        <div className={s.messages}>
          <div>{messagesElement}</div>
      </div>
    </div>
 <AddMessageForm onSubmit={addNewMessage}/>
  </div>
  );
};

export default Dialogs;


