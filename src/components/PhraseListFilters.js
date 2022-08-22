import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';

class PhraseListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};
	
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={e => {
						this.props.dispatch(setTextFilter(e.target.value));
						// console.log(e.target.value);
					}}
				/>
			</div>
		);
	}
}

// setup value and onChange
const mapStateToProps = state => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(PhraseListFilters);
