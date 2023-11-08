import React from "react";
import { reduxForm} from "redux-form" ; 
import { FormControl, createFild } from "../common/FormsControl/FormsControl";
import { required} from "../utils/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import s from "./../common/FormsControl/FormsControl.module.css"

//const maxLength10 = maxLengthCreator(50);
//const minLength3 = minLengthCreator(3)

const LoginForm = ({handleSubmit , error}) => {

 return (
    <form onSubmit={handleSubmit}>

            {createFild("input" , "Email" , "email" , [required] , FormControl )};
            {createFild("input" , "Password" , "password" , [required] , FormControl ,{type:"password"})};
            {createFild("input" , null, "rememberMe", null, FormControl ,{type:"checkbox"}, "remember me")};
            {/*<Field child={"input"} component={FormControl} placeholder={"Email"} name={"email"} validate={[required ,maxLength10, minLength3 ]}/>*/
            /*<Field child={"input"} component={FormControl} placeholder={"Password"} name={"password"} type={"password"} validate={[required ,maxLength10, minLength3 ]}/>*/
            /*<Field child={"input"} component={FormControl} name={"rememberMe"} type={"checkbox"}/>*/}
 
          
          {error && <div className={s.fromError}>{error}
          </div>
          }
        <div>
            <button>Login</button>
          </div>
    </form>
 );
}

const LoginReduxForm = reduxForm({form: 'login',})(LoginForm);

const Login = (props) => {
  
  const onSubmit = (formData) =>{
  props.login(formData.email , formData.password, formData.rememberMe);
  }

  if(props.isAuth){
  
      return <Navigate to={"/profile"} />
    
  }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state) => {
 return {
  isAuth: state.auth.isAuth
 }
}

export default connect(mapStateToProps ,{login})(Login)