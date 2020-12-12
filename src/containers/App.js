import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import SwitchSourceButton from '../components/SwitchSourceButton';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, switchSource, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		source: state.searchRobots.source,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onSwitchSource: () => dispatch(switchSource()),
		onRequestRobots: (source) => dispatch(requestRobots(source))
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots(this.props.source);
	}

	componentDidUpdate(prevProps) {
		// Reload robots if the source changed
		if (this.props.source !== prevProps.source) {
			this.props.onRequestRobots(this.props.source);
		}
	}

	render() {
		const { searchField, source, onSearchChange, onSwitchSource, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1>Loading</h1> :
			( 
				<div className='tc'>
					<h1 className='f1'>RoboFriends  -  {source}</h1>
					<SearchBox searchChange={onSearchChange}/>
					<SwitchSourceButton switchSource={onSwitchSource} label={source}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);