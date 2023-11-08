import React from "react";
import s from "./FormsControl.module.css"
import { Field } from "redux-form";



export const FormControl = ({input, meta:{touched , error}, ...restProps}) => {
	const hasError = touched && error
	return(
		<div className={`${s.formControl} ${hasError && s.error}`}>
			<div>
				<restProps.child {...restProps} {...input}  />
			</div>
			<div>
				{hasError && <span>{error}</span>}
			</div>
		</div>
	)
}

export const createFild = (child , placeholder , name , validators , component , props={} , text = "") => {
	return (
	<div>
		<Field child={child}
		       placeholder={placeholder}
		       name={name}
			   validate={validators}
			   component={component}
			   {...props}/>{text}
   </div>
	)
}

/*export const Element = Element => ({input , meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={s.formControl + " "+ (hasError ? s.error : "")}>
		<Element  {...input} {...props}/>
		{hasError && <span>{meta.error}</span>}
		</div>
	);
}*/