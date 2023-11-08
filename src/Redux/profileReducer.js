import  { profileAPI, userAPI } from "../API/API";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initiallState = {
  posts :[
    { id: 1, message: "Hi , how are you", likeCount:12 },
    { id: 2, message: "How is your it-kamasutra" , likeCount:20 },
    { id: 3, message: "Hello" , likeCount:12 },
    { id: 4, message: "How is your i" , likeCount:20 }
    ],
    profile: null,
    status: '',
}



const profileReducer = (state = initiallState , action) => {

    switch(action.type){
        case ADD_POST: {
        let newPost = {
          id : 2,
          message: action.newPostText,
          likeCount: 6,
         
        };
      return {
        ...state,
        posts: [...state.posts , newPost],
      };
      //stateCopy.posts = [...state.posts];
      //stateCopy.posts.push(newPost);
      //stateCopy.newPostText = '';

      //return stateCopy;
      }
        case SET_USER_PROFILE : {
          return {...state , profile: action.profile}
        }

        case SET_STATUS : {
          return {...state , status: action.status}
        }
       default:
        return state;
        
      
      } 

}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile})
export const addPostActionCreator = (newPostText) =>({type: ADD_POST , newPostText});
export const setStatus = (status) => ({type: SET_STATUS , status });
export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
        });
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
        
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0)
                dispatch(setStatus(status));
     
}
export default profileReducer;