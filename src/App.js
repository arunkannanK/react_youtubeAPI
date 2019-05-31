import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';


class App extends React.Component 
{
	state = {
		videos : [],
		selectedVideo : null
	};
	onSearchSubmit = async(name) =>
	{
		console.log(name);
		const response = await youtube.get('/search',{
			params:{
				q:name
			}
		})

		console.log(response.data.items);
		this.setState({videos:response.data.items});
	}

	onVideoSelect = video =>
	{
		console.log(video); 
		this.setState({selectedVideo:video})
	}

	render()
	{
		return(
			<div style={{marginTop:'10px'}}>
				<div className="ui container">
					<SearchBar onDisplay={this.onSearchSubmit}/>
					<VideoDetails video={this.state.selectedVideo} />
					<div className="ui segment">
						<VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos} />
					</div>
				</div>

			</div>
		);
	}
};

export default App;

