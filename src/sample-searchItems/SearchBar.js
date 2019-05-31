import React from 'react';


class SearchBar extends React.Component
{
	state = {
		name : '',
	}

	onSubmitForm = (event) =>
	{
		event.preventDefault();
		
		this.props.onDisplay(this.state.name);
	}

	render()
	{
		return(
			<div className="ui segment">
				<form onSubmit={this.onSubmitForm} className="ui form">
					<div className="field">
						<label>Image Search</label>	
						<input type="text" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} placeholder="Search here.."/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;