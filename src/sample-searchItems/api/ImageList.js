import React from 'react';
import '../css/style.css';

const ImageList = props =>
{
	console.log(props.images);
	const image = props.images.map((dt, index)=>{
		return <div key={index}><img src={dt.urls.small}/></div>;
	});
	
	return <div className="image-list">{image}</div>;
}


export default ImageList;