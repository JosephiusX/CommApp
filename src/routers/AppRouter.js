import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import TopicsDashboardPage from '../components/TopicsDashboardPage';
import AddTopicPage from '../components/AddTopicPage';
import EditTopicPage from '../components/EditTopicPage';
import EditPhrasePage from '../components/EditPhrasePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


// 1

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={TopicsDashboardPage} exact={true} />
				<Route path="/" component={PhrasesDashboardPage} exact={true} />
				<Route path="/create" component={AddTopicPage} />
				<Route path="/edit/:id" component={EditTopicPage} />
				<Route path="/editPhrase/:id" component={EditPhrasePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
