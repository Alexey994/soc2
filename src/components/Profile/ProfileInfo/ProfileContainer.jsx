import React from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { getUserProfile , getStatus , updateStatus } from "../../../Redux/profileReducer";
import { useLocation , useNavigate , useParams }  from 'react-router-dom';
import { withAuthRedirect } from "../../../Hook/withAuthRedirect";
import { compose } from "redux";




export class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
       this.props.getUserProfile(userId);
       this.props.getStatus(userId);
      
    }
    render(){
        return (
            <Profile {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
    )
 }
}

let mapStateToProps = (state) =>( {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth : state.auth.isAuth,
  
 })

 function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
    
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }






export default compose(
    connect(mapStateToProps, {getUserProfile , getStatus , updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);

