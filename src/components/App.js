import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDbQenosmZ2WVau8xS9QAoboO4Tu6u7TCU';

class App extends Component {
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
		console.log(res);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
			</div>
		);
	}
}

export default App;
