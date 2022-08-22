import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// // const date = new Date();
// const now = moment();
// console.log(now);
// console.log(now.format('MMM'));
// console.log(now.format('MMM Do'));
// console.log(now.format('MMM Do YYYY'));
// console.log(now.format('MMM Do, YYYY'));

export default class TopicForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.topic ? props.topic.description : '',
			note: props.topic ? props.topic.note : '',
			amount: props.topic ? (props.topic.amount / 100).toString() : '',
			createdAt: props.topic ? moment(props.topic.createdAt) : moment(),
			calendarFocused: false,
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
	onAmountChange = e => {
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({amount}));
		}
	};
	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => ({createdAt}));
		}
	};
	onFocusChange = ({focused}) => {
		this.setState(() => ({calendarFocused: focused}));
	};
	onSubmit = e => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({error: 'Please provide description and amount.'}));
		} else {
			this.setState(() => ({error: ''}));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
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
					<input value={this.state.amount} type="number" placeholder="Amount" onChange={this.onAmountChange} />
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1} // limit months shown
						isOutsideRange={() => false} // enable days from past
					/>
					<textarea
						placeholder="Add a note for your expenses(optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					></textarea>
					<button>Add Topic</button>
				</form>
			</div>
		);
	}
}

// import React from 'react';

// export default class ExpenseForm extends React.Component {
//   state = {
//     description: '',
//     note: '',
//     amount: ''
//   };
//   onDescriptionChange = (e) => {
//     const description = e.target.value;
//     this.setState(() => ({ description }));
//   };
//   onNoteChange = (e) => {
//     const note = e.target.value;
//     this.setState(() => ({ note }));
//   };
//   onAmountChange = (e) => {
//     const amount = e.target.value;

//     if (amount.match(/^\d*(\.\d{0,2})?$/)) {
//       this.setState(() => ({ amount }));
//     }
//   };
//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             placeholder="Description"
//             autoFocus
//             value={this.state.description}
//             onChange={this.onDescriptionChange}
//           />
//           <input
//             type="text"
//             placeholder="Amount"
//             value={this.state.amount}
//             onChange={this.onAmountChange}
//           />
//           <textarea
//             placeholder="Add a note for your expense (optional)"
//             value={this.state.note}
//             onChange={this.onNoteChange}
//           >
//           </textarea>
//           <button>Add Expense</button>
//         </form>
//       </div>
//     )
//   }
// }
