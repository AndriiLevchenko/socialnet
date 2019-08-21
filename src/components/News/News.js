 import React from "react";
 import s from "./News.module.css";

  const News =()=>{
		return(
			<div>
				<div>
					<img  src='https://www.nastol.com.ua/pic/201808/2560x1600/nastol.com.ua-296026.jpg' alt='' />
				</div>
				<div className={s.card_img}>
					Description
				</div>
				<button >Click</button>
			</div>
			)
}

 
 export default News;

