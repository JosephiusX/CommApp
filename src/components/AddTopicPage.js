import React from 'react';
import {connect} from 'react-redux';
import TopicForm from './TopicForm';
import {addTopic} from '../actions/topics';

const AddTopicPage = props => (
	<div>
		<h1>Add Topic</h1>
		<TopicForm
			onSubmit={Topic => {
				props.dispatch(addTopic(Topic));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(AddTopicPage);
