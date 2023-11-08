import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music";
import Settings from "./components/Navbar/Settings";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import React, { Fragment, Suspense } from "react";
import { compose } from "redux";
import { initializeApp } from "./Redux/appReducer";
import withRouter from "./components/withRouter/withRouter"
import Preloader from "./components/common/Pleloader/Preloader/Preloaer";
import store from './Redux/reduxStore';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { lazy } from "react";
import { withSuspense } from "./Hook/withSuspense";

const DialogsContainer = lazy(()=> import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'));

//const DialogWithSuspense = withSuspense(DialogsContainer)
//const ProfileWithSuspense = withSuspense(ProfileContainer)



class App extends React.Component {
componentDidMount(){
  this.props.initializeApp();
}
   render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
         return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader/>}>
            <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
            <Route path='/dialogs' element={<DialogsContainer/>}/>
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />}/>
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer/>} />
            <Route path="/login" element={<Login/>} />
           wwwwwwww</Routes> 
          </Suspense>  
        </div>
      </div>
  );
  }
}

const mapStateToProps = (state) => ({

  initialized: state.app.initialized,
})
const AppContainer =  compose(
  withRouter,
  connect(mapStateToProps,{initializeApp}))(App);

let SamuraiJSApp = (props) => {
  return (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
    <AppContainer/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  );
}

export default SamuraiJSApp