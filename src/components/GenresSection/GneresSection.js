import React from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/GenresSection/GenresSection.css";
import GenreBox from "./GenresBox";

const API_URL = "https://localhost:8000";

class GenresSection extends React.Component {
	state = {
    genres: []
  }

	componentDidMount() {
	  const url = `${API_URL}/all-genres/`;
	  axios.get(url).then(response => response.data).then(data => {
			this.setState({genres: data})
			console.log(this.state.genres)
		});
  }

	render() {
		return (
			<Container>
				<Row>
					<Col></Col>
					<Col md="auto" className="genres-section">
						<Container>
							<Row>
								{/* {this.state.genres.map((genre) => (
									<GenreBox title={genre.title}/>
								))} */}
							</Row>
						</Container>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		);
	}
}

export default GenresSection;