import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC35j-K5ySy8EdL5dVbCHIBrNdJ07EdO1w';
// Create a new component. This componenet should produce
// Some HTML. 1 component per file.
// Functional based componenent const App = () => {return()}. Taking in info and spitting out jsx
// Can contain class based componenent 
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('Imagine Dragons');
	}

	videoSearch(term) {
		// object with a key with and a term
		// config options and callback function
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// only works when key an property are the same
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render() {

		const videoSearch = _.debounce((term) => {
			this.videoSearch(term);
		}, 300)

		return (
			<div>  
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div>
		);
		// passing props in VideoList
	}
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
// render component and insert into the second part
// of the below

ReactDOM.render(<App />, document.querySelector('.container'));