import React from 'react';
import {connect} from 'react-redux';
import TopicListItem from './TopicsListItem';
import selectTopics from '../selectors/topics';

const TopicList = props => (
	// i used {} instead of () after props
	<div>
		<h1>Topics List</h1>
		{props.topics.map(topic=> {
			return <TopicListItem key={topic.id} {...expense} />;
		})}
	</div>
);

const mapStateToProps = state => {
	return {
		topics: selectTopics(state.topics, state.filters),
	};
};

export default connect(mapStateToProps)(TopicList);