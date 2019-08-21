import React from "react";
import styles from "./Users.module.css";
import {NavLink} from 'react-router-dom';
import pictureGirl from './../../images/pictureGirl.jpg';

 let  Users =(props)=>{
 		let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
	 		let pages = [];
			for(let i=1; i<=pagesCount; i++){
				pages.push(i);
			}
 		return(
			<div>
				<div>
					{pages.map(p=>{
						return(
							<span className={props.currentPage === p ? styles.selectedPage : undefined} onClick ={()=> {props.onPageChanged(p);}}>
								  {p}
							</span>
						)					
					})
					}
		 		
		 		</div>
				{
					props.users.map(u=>
						<div key={u.id} className = {styles.cardImg + ' ' +styles.item}>
							<span>
								<div>
									<NavLink to={'/profile/' + u.id}>
									<img src={u.photos.small != null ? u.photos.small : pictureGirl }  className ={styles.userPhoto} alt='foto' />
									</NavLink>
								</div>
								<div>
									{u.followed 
										? <button disabled={props.isFollowingInProgress.some(id=> id === u.id)} onClick = {()=> {
													props.unfollow(u.id);	
	 												
										} }>Unfollow</button >
										:<button disabled={props.isFollowingInProgress.some(id=> id === u.id)} onClick = {()=> {
													props.follow(u.id);	
	 												

										} }>Follow внатуре</button >  

									}
								</div>
							</span>
							<span>
								<span>
									<div>
										{u.name + ' ' + u.id}
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

export default Users;

