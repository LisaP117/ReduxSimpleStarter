import React, { Component } from 'react';
// class based used when ever it needs to be aware of state / date changing / rendgering
class SearchBar extends Component {
	// define / initialize state in class based components only components have state
	// reserved for set up ... variables
	constructor(props) {
		// call parent method on parent class using super
		super(props);
					// property - update or record change on. this equals object
		this.state = { term: 'Type here' };
	}

	// this.setState to update. 
	// controlled input. value set by state / receive value from state 
	// changes only when state changes
	// set state causes it to re render
	// value of input = state

	render() {
		return (
			<div className="search-bar">						
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
