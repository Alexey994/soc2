import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return(
        <header className={s.header}>
            <img src ='/#' alt="tt"/>
            <div className={s.loginBlock}>
                { props.isAuth 
                ? <div>{props.login} -  <button onClick={props.loqout}>Log out</button></div>
                 : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    );
}

export default Header