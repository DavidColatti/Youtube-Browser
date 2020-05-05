import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyDbQenosmZ2WVau8xS9QAoboO4Tu6u7TCU';

class App extends Component {
	state = {
		videos: []
	};

	onTermSubmit = async (term) => {
		const res = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				key: KEY,
				type: 'video'
			}
		});

		this.setState({
			videos: res.data.items
		});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
