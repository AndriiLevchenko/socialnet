 import React, {useState, useEffect} from "react";
 import s from "./ProfileInfo.module.css";


  const ProfileStatusWithHooks =(props)=>{

  
 //  	state = {
 //  		editMode: false,
 //  		status: this.props.status
 //  	}


	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(()=>{
		setStatus(props.status);
	}, [props.status]);

  	const activateEditMode=()=>{
  		setEditMode(true);
	}

	const deactivateEditMode=()=>{
		setEditMode(false);
  		props.updateStatus(status);
	}

	const onChangeStatus =(event)=>{
  		setStatus(event.target.value);
  	}
  	

	// componentDidUpdate(prevProps, prevState){
	// 	if(this.props.status != prevProps.status){
	// 		this.setState({status: this.props.status});
	// 	}
	// 	console.log('реально компеонент дид апдейт');
	// }


	



console.log('внатуре запустилось с хуками');

		return(
			<div>	
				<div>
					ProfileStatus
				</div>
				{!editMode &&
					<div>
						<span onClick = {activateEditMode}>
							{props.status || '-------------'}
						</span>
					</div>
				}
				
				{editMode &&
					<div>
						
						<input autoFocus={true} onChange={onChangeStatus}  onBlur = {deactivateEditMode} value={status} />
				
					</div>
				}
			</div>	
		)
		
}

 
 export default ProfileStatusWithHooks;

