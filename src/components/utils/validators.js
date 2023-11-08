
export const required = value =>{
	if(!value) return 'Field is required'; return undefined
}


export const maxLengthCreator = maxValue => value => {
	if(value.length > maxValue ) return `Max length is ${maxValue} symbols`; return undefined

}

export const minLengthCreator = minValue => value => {
	if(value.length < minValue ) return `Min length is ${minValue} symbols`; return undefined

}
/*export const maxLengthCreator = maxLength => value => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbol`;
    return 'undefined';
}



export const minLengthCreator = minLength => value => {
    if(value.length < minLength) return `Min length is ${minLength} symbol`;
    return 'undefined';
}*/
