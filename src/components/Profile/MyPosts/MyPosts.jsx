import React from "react"
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
//import { Field , reduxForm } from "redux-form";
//import { addPostActionCreator,updateNewPostTextActionCreator } from "../../../Redux/profileReducer";
//import { FormControl} from "../../common/FormsControl/FormsControl";
//import { maxLengthCreator, minLengthCreator, required} from "../../utils/validators";
import AddPostForm from "./AddPostForm/AddPostForm";
import { memo } from "react";

/*const maxLength10 = maxLengthCreator(10);
const minLength3 = minLengthCreator(3);


let AddMyPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
                <Field child="textarea" component={FormControl} validate={[required, maxLength10, minLength3]} placeholder="Login" name="newPostText" type="text"/>
                    <div>
                    <button>Add Posts</button>
            </div>
    </form>
    );
}

let AddNewPostFormRedux = reduxForm({form :"ProfileAddNewPostForm"})(AddMyPostForm);*/

const MyPosts = memo((props) => {
   
        let postsElements =props.posts.map(p =>
        <Posts message={p.message} likeCount={p.likeCount} key={p.id}
       />)
        
        let onAddPost = (values) => {
        props.addPost(values.newPostText);
        alert(values.newPostText)
    }

 return (
            <div className={s.postsBlock}>
               <h3 style={{color:'yellow'}}>My Posts</h3>
               <AddPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
            </div>
            </div>
        
    );
})

export default MyPosts