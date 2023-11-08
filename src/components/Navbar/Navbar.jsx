import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const activeStyles = {
        color: 'gold',
    }
    
      return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={s.link} to="/profile" 
                 style={({isActive})=> isActive ? activeStyles : undefined}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"  
                style={({isActive})=> isActive ? activeStyles : undefined}>Message</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to="/news" 
                style={({isActive})=> isActive ? activeStyles : undefined}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" 
                style={({isActive})=> isActive ? activeStyles : undefined}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" 
                style={({isActive})=> isActive ? activeStyles : undefined}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" 
                style={({isActive})=> isActive ? activeStyles : undefined}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Navbar