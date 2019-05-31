import React from 'react';


const Sample = (props) =>
{
	console.log(props);
	return (
		<div>
			<h1>Name : {props.name}</h1>
			<h3>Age  : {props.age}</h3>	
		</div>
	);
}

export default Sample;