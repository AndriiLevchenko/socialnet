 import React from "react";
 import styles from "./Users.module.css";
 import * as axios from 'axios';
 import pictureGirl from './../../images/pictureGirl.jpg';


 const UsersС =(props)=>{

 	let getUsers =()=>{

 	

 	//Этот if - заглушкаю Чтобы не было бесконечного цикла.Атак аксиос-запрос делается лишь 1 раз.
 	if(props.users.length === 0){
	 	
 	
 	
 		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
 			 			console.log(response.data.items);
 			props.setUsers(response.data.items);
 	
 		});
 	}
 }
console.log(props);

		return(
			<div>
			<button onClick={getUsers}>Get Users</button>
				{
					props.users.map(u=>
						<div key={u.id} className = {styles.cardImg + ' ' +styles.item}>
							<span>
								<div>
									<img src={u.photos.small != null ? u.photos.small : pictureGirl }  className ={styles.userPhoto} alt='foto' />
								</div>
								<div>
									{u.followed ? <button onClick = {()=> {props.follow(u.id)}} >Follow</button > : <button onClick = {()=> {props.unfollow(u.id)}}>Unfollow</button >}
								</div>
							</span>
							<span>
								<span>
									<div>
										{u.name}
									</div>
									<div>
										{u.followed}
									</div>
								</span>
								<span>
									<div>
										{u.status}
									</div>
									<div>
										{'u.location.city'}
									</div>
								</span>
							</span>


						</div>
					)
				}
			</div>
		)
}

 
 export default UsersС;

