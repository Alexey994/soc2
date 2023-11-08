import React from "react";
import { Field , reduxForm } from "redux-form";
import { FormControl} from "../../../common/FormsControl/FormsControl";
import { maxLengthCreator, minLengthCreator, required } from "../../../utils/validators";


const maxLength10 = maxLengthCreator(10);
const minLength3 = minLengthCreator(3);

const AddPostForm = (props) => {
   return (
   <form onSubmit={props.handleSubmit}> 
      <div>
        <Field child={"input"} component={FormControl} validate={[required,maxLength10, minLength3]} name={"newPostText"} placeholder={"Enter"} type={"text"}/>
      </div>
      <div><button>Add Post</button></div>
   </form>
   )
}
export default  reduxForm({form: "profile-add-post"})(AddPostForm)

