import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/GenresSection/GenresSection.css";

function GenreRow(props) {
	return (
		<Container>
      <Row>
        {props.genres.map((genre) => (
          <Col className="genre-box">
			      {genre.genre.toUpperCase()}
		      </Col>
        ))}
      </Row>
    </Container>
	);
}

export default GenreRow;