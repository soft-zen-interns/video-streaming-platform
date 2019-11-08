import React from "react";
import {Col} from "react-bootstrap";
import "../../styles/GenresSection/GenresSection.css";

function GenreBox(props) {
	return (
		<Col className="genre-box">
			{props.title}
		</Col>
	);
}

export default GenreBox;