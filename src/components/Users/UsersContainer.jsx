
import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers} from '../../Redux/usersReducer ';
import Users from './Users';
import Preloader from '../common/Pleloader/Preloader/Preloaer';
import { compose } from 'redux';
import { getUser, getCurrentPge, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../Redux/Selectors/usersSelectors';



class UsersContainer extends React.Component {
  
    componentDidMount(){

      const {currentPage , pageSize} = this.props;
      this.props.requestUsers(currentPage , pageSize)
    }
          onPageChanged = (pageNumber) => {
            const {pageSize} = this.props
            this.props.requestUsers(pageNumber , pageSize)
          }
  
      render(){
        
        return (
                 <>
                 {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingInProgress={this.props.followingInProgress}/>
                 </>
        )
      }
  }


let mapStateToProps = (state) => {
return {
    users: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPge(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),

    
}
};

/*let mapDispatchToProps = (dispatch) => {
return {
    follow: (userId) => {
        dispatch(followAC(userId));
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    },

    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
   setTotalUsersCount: (totalCount) => {
        dispatch(setUsersTotalCountAC(totalCount))
   },

   toggleIsFetching: (isFetching) =>{
    dispatch(toggleIsFetchingAC(isFetching))
   }
}
};


 export default connect(mapStateToProps , mapDispatchToProps)(UsersContainer)*/


export default compose(
  connect(mapStateToProps, {
  follow , unfollow , setCurrentPage,toggleFollowingProgress, requestUsers}),
  )(UsersContainer);