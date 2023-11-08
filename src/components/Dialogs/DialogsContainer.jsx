import { sendMessageCreator} from "../../Redux/dialogsReducer";
import {connect} from 'react-redux'
import { withAuthRedirect } from "../../Hook/withAuthRedirect";
import Dialogs from "./Dialogs";
import { compose } from "redux";

/*const DialogsContainer = (props) => {
  return (
    <storeContext.Consumer>
      { (store)=>{

let state = store.getState().dialogsPage;

  
  let onSendMessageClick = () => {
   store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (body) => {
   store.dispatch(updateNewMessageBodyCreator(body));
  }
      
   return <Dialogs 
   updateNewMessageBody={onNewMessageChange} 
   sendMessage={onSendMessageClick}
   dialogsPage={state}/>
      }}
   </storeContext.Consumer>
  );
};
*/
let mapStateToProps = (state) => {
return {
  dialogsPage: state.dialogsPage,
     }
}


let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);