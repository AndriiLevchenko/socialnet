 import React from "react";
 import s from "./Header.module.css";
 import {NavLink} from 'react-router-dom';

const Header=(props)=>{
		return(
			<header className = {s.header}>
				<div>
					<a href="#a1">Home</a>-
					<a href="#a2">News </a>-
					<a href="#a3">Messages</a>-
				</div>
				<div className = {s.loginBlock}>
					{props.isAuth ? props.login 
					: <NavLink to={'/login'}> Login </NavLink>
					}
				</div>
			</header>
		
		)
}

 
 export default Header;

