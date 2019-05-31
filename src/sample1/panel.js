import React from 'react';


const Panel = (props) =>
{
	const sty = {backgroundColor:'skyblue',color:'white',padding:'5px'};
	const sty1 = {backgroundColor:'red',color:'white',padding:'5px'};
	return(
		<div>
			<div>{props.children}</div>
			<button type="button" style={sty}>Accept</button><button type="button" style={sty1}>Reject</button>
			<hr />
		</div>
	)
}


export default Panel;