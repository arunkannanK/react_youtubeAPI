import React from 'react';
import './VideoItems.css';

const VideoItems = ({video, onVideoSelect}) =>
{
	return(
		<div onClick={()=>onVideoSelect(video)} className="video-item item">
			<img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url} />
			<div className="content">
				<a className="header">{video.snippet.title}</a>
				<div className="description">{video.snippet.description}</div>
			</div>
		</div>
	) 
}

export default VideoItems;