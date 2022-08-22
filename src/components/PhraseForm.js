import React from 'react';

export default class PhraseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.phrase ? props.phrase.description : '',
			note: props.phrase ? props.phrase.note : '',
			error: '',
		};
	}
	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => ({description}));
	};
	onNoteChange = e => {
		e.persist();
		this.setState(() => ({note: e.target.value}));
	};
	onSubmit = e => {
		e.preventDefault();

		if (!this.state.description) {
			this.setState(() => ({error: 'Please provide description and amount.'}));
		} else {
			this.setState(() => ({error: ''}));
			this.props.onSubmit({
				description: this.state.description,
				note: this.state.note,
			});
		}
	};
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<textarea
						placeholder="Add a note for your expenses(optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					></textarea>
					<button>Add Phrase</button>
				</form>
			</div>
		);
	}
}