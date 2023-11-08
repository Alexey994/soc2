import {addPostActionCreator} from "../../../../Redux/profileReducer";
import MyPosts from "../MyPosts";
import {connect} from 'react-redux'

/*const MyPostsContainer = (props) => {
   //let state = props.store.getState();
   return (
      <storeContext.Consumer>
        { 
        (store)=>{

         let state = store.getState();
         let addPost = () => {
            store.dispatch(addPostActionCreator());
         };
      
         let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
           store.dispatch(action);
         };

     return  <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
         />}}
      </storeContext.Consumer>

   );
};*/

const mapStateToProps = (state) =>{
return {
posts: state.profilePage.posts,
//newPostText: state.profilePage.newPostText
}
}

const mapDispatchToProps = (dispatch) => {
 return {

   addPost:(newPostText) => {
dispatch(addPostActionCreator(newPostText));
   },
 }
}
const PostsContainer = connect(mapStateToProps , mapDispatchToProps)(MyPosts)
export default PostsContainer;
