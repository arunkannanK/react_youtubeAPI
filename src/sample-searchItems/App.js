import React from 'react';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash';
import ImageList from './api/ImageList';


class App extends React.Component 
{
	state = 
	{
		images : [],
		a : [1,2,3]
	};

	onSearchSubmit = async(name) =>
	{

		const response = await unsplash.get('/search/photos',{
			params : {query:name}
		});
		// .then(response=> {
		// 	console.log(response.data.results);
		// });
		console.log(this);
		console.log(response.data.results);
		this.setState({images:response.data.results});
		
	}

	render()
	{
		return(
			<div style={{marginTop:'10px'}}>
				<ul>
					{this.state.a.map((v, index)=><li>{v}</li>)}
				</ul>
				<div className="ui container"><SearchBar onDisplay={this.onSearchSubmit}/></div>
				<div className="ui container">
					<h2 style={{marginTop:'40px'}}>Found {this.state.images.length} images.</h2>
					<ImageList images={this.state.images} />
				</div>

			</div>
		);
	}
};

export default App;

