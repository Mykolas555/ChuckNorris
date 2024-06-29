import React, { useState } from "react";
import './joke.scss';
import { Container, Row, Col, Button } from "reactstrap";
import { getRandomJoke } from "../../services/apiServices";

const Joke = () => {
    const [randomJoke, setRandomJoke] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const fetchRandomJoke = async () => {
        try {
            const joke = await getRandomJoke();
            setRandomJoke(joke);
            setButtonClicked(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className="joke mt-3">
            <Row className="mt-2">
                <Col className="joke__header">
                    <h6>Random jokes of Chuck Norris</h6>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="joke__button">
                    <Button color="warning" onClick={fetchRandomJoke}>Generate Joke</Button>
                </Col>
            </Row>
            {buttonClicked && (
                <Row className="mt-2">
                    <Col>
                        <div className="card">
                            <h5 className="card-header">Generated Joke</h5>
                            <div className="card-body">
                                <p className="card-text">{randomJoke.value}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Joke;
