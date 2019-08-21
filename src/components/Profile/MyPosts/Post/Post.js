import React from "react";
import s from './Post.module.css'

const Post =(props)=>{
		return(
					<div className={s.item}>
							<img src='https://look.com.ua/pic/201401/1920x1200/look.com.ua-90028.jpg'  alt=' ' />
							{props.id +' ' + props.message}
							<div><span> Like ={props.likesCount} </span></div>
					</div>
		)
}

 
 export default Post;
