import React from 'react';
import style from './FormControls.module.css'

const Textarea =({input, meta, ...props} )=>{

	const hasError = meta.touched && meta.error;

	return (
		<div className={style.formControl + ' ' + (hasError ? style.error : ' ') }>
			<div>
				<textarea {...input} {...props} />
			</div>
			{hasError && <label>{meta.error}</label>}
		</div>
	)
}
export default Textarea;