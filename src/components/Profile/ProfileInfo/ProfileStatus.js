 import React from "react";
 import s from "./ProfileInfo.module.css";


  class ProfileStatus extends React.Component {

  
  	state = {
  		editMode: false,
  		status: this.props.status
  	}

  	onChangeStatus=(event)=>{
  		this.setState({
  			status: event.target.value
  		})
  		console.log(event.target);
	}

  	activateEditMode=()=>{
  		this.setState({
  			editMode: true
  		});
	}

	deactivateEditMode=()=>{
		this.setState({
  			editMode: false
  		});
  		this.props.updateStatus(this.state.status);
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.status != prevProps.status){
			this.setState({status: this.props.status});
		}
		console.log('реально компеонент дид апдейт');
	}

  	render(){
		return(
			<div>	
				<div>
					ProfileStatus
				</div>
				{!this.state.editMode &&
					<div>
						<span onClick = {this.activateEditMode}>
							{this.props.status || '-------------'}
						</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						
						<input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} value={this.state.status} />
				
					</div>
				}
			</div>	
		)
	}	
}

 
 export default ProfileStatus;

