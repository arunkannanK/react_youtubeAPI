import React from 'react';


class SearchBar extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			name : '',
		}
		this.myRef = React.createRef();
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
						<input type="text" ref={this.myRef} value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} placeholder="Video search here.."/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;