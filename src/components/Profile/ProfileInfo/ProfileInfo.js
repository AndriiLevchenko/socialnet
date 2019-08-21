 import React from "react";
 import s from "./ProfileInfo.module.css";
 import Preloader from './../../common/Preloader';
 import ProfileStatusWithHooks from './ProfileStatusWithHooks';
 

  const ProfileInfo =(props)=>{

  		if(!props.profile) {	return <Preloader />   }

		return(
			<div>
				<div className={s.page_img}>
					<img  src='https://www.nastol.com.ua/pic/201808/2560x1600/nastol.com.ua-296026.jpg' alt=' ' />
				</div>
				<div className={s.card_img}>
					<img src={props.profile.photos.large} alt=' ' />
					<ProfileStatusWithHooks status = {props.status}  updateStatus = {props.updateStatus}  />
				</div>
			</div>	
		)
}

 
 export default ProfileInfo;

