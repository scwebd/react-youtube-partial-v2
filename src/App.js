import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
const apiKey = "YOUR KEY GOES HERE";

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null	
	}

	componentDidMount() {
		this.runSearch("fish sticks");
	}

	runSearch(term) {
		YouTubeSearch({ key: apiKey, term: term }, videos => {
			console.log(videos);
			this.setState({ videos: videos, selectedVideo: videos[0] });

		});
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<SearchBar />
					</Col>
				</Row>
				<Row>
					<Col md="8">
						<VideoDetail selectedVideo={this.state.selectedVideo} myName="sarah" />
					</Col>
					<Col md="4">
						<VideoList />
					</Col>
				</Row>
			</Container>

    	);
	}
}

export default App;
