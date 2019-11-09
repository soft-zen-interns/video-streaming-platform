import React from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/GenresSection/GenresSection.css";
import GenreBox from "./GenresBox";

class GenresSection extends React.Component {
	state = {
    genres: []
  }

	componentDidMount() {
	  const url = "http://localhost:8000/genres/all-genres";
	  axios.get(url).then(response => response.data).then(data => {
			this.setState({genres: data})
			console.log(this.state.genres)
		}).catch((err) => {console.log(err)});
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