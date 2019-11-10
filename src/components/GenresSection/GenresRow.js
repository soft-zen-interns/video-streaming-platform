import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import "../../styles/GenresSection/GenresSection.css";

function GenreRow(props) {
	return (
		<Container>
      <Row>
        {/* might use <Col> */}
        {props.genres.map((genre) => (
          <div className="genre-box">
			      <p>{genre.title.toUpperCase()}</p>
		      </div>
        ))}
      </Row>
    </Container>
	);
}

export default GenreRow;