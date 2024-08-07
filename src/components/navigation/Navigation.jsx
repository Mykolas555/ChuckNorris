import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import './navigation.scss'

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container className="navigation">
                <Row>
                    <Col xl={6} sm={12} className="navigation__logo">
                        <h3>Chuck Norris</h3>
                    </Col>
                    <Col xl={6} sm={12} className="navigation__nav">
                        <p onClick={() => navigate('/')}>Home</p>
                        <p onClick={() => navigate('/categories')}>Categories</p>
                        <p onClick={() => navigate('/joke')}>Joke</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Navigation;
