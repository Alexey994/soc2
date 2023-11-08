import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer ";
import authReducer from "./authReducer";
import ThunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer ,
    usersPage: usersReducer,
    auth: authReducer,
    form : formReducer,
    app: appReducer,
    age: profileReducer

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers , composeEnhancers(applyMiddleware(ThunkMiddleWare)))

//let store = createStore(reducers, applyMiddleware(ThunkMiddleWare))

window.__store__= store;

export default store;