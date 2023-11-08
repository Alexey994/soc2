import { userAPI } from "../API/API";
import { updateObjectInArray } from "../components/utils/objectHelpers"; 
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS';

let initiallState = {
  users :[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}



const usersReducer = (state = initiallState , action) => {

    switch(action.type){
        case FOLLOW:
return {
  ...state,
  users: updateObjectInArray(state.users ,action.userId, "id", {followed: true})
  //users: [...state.users]
  /*users: state.users.map(u =>{
    if(u.id === action.userId) {
return {...u, followed: true}
    }
    return u;
  })
  -----> objectHelpers function*/
}
        case UNFOLLOW:
return {
         ...state,
        users: updateObjectInArray(state.users ,action.userId, "id", {followed: false})
          /*users: [...state.users]
          users: state.users.map(u =>{
          if(u.id === action.userId) {
     return {...u, followed: false}
              }
              return u;
            })*/
          }

          case SET_USERS: {
          return { ...state , users: action.users }
        }

          case SET_CURRENT_PAGE: {
            return {...state , currentPage: action.currentPage}
          }

         case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount }
          }

          case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
          }
          case FOLLOWING_IN_PROGRESS: {
            return {...state, followingInProgress: action.isFetching
              ? [...state.followingInProgress, action.userId]
              : state.followingInProgress.filter(id=> id !== action.userId) }
          }

       default:
        return state;
        
      
      } 

}

export const followSucces = (userId) =>({type: FOLLOW , userId });
export const unfollowSucces = (userId) => ({type: UNFOLLOW , userId});
export const setUsers = (users) => ({ type: SET_USERS , users})
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE , currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT , totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING , isFetching})
export const toggleFollowingProgress = (isFetching, userId)=>({type: FOLLOWING_IN_PROGRESS, isFetching , userId});


export const  requestUsers = (page, pageSize) =>{
  return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));
     let data = await userAPI.getUsers(page,pageSize);
     dispatch(toggleIsFetching(false));
     dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}


const followUnfollowFlow = async (dispatch , userId , apiMethod, actionCreator) => {
  
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if(response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false , userId));
}

export const follow = (userId)=>{
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId ,userAPI.follow.bind(userAPI),followSucces);
  }
}

export const unfollow = (userId) =>{
return async (dispatch) => {
  followUnfollowFlow(dispatch, userId , userAPI.unfollow.bind(userAPI), unfollowSucces);
}
}

export default usersReducer;