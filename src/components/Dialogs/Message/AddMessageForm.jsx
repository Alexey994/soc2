import React from "react"
import { Field , reduxForm } from "redux-form"
import { required, maxLengthCreator, minLengthCreator } from "../../utils/validators"
import { FormControl} from "../../common/FormsControl/FormsControl"

const maxLength10 = maxLengthCreator(4);
const minLength3 = minLengthCreator(3);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
         <div>
             <Field child="input" component={FormControl} validate={[required,maxLength10, minLength3]}  name={"newMessageBody"} placeholder={"Enter your message"} type="text"/>
         </div>
              <div>
                  <button>Send</button>
              </div>
    </form>
  )
}

export default reduxForm({form : "dialog-add-message-form"})(AddMessageForm)
