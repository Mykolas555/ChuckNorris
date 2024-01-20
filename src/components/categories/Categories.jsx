import React, { useState, useEffect } from "react";
import { getCategories, getCategoriesRandomJoke } from "../../services/apiServices";
import './categories.scss';
import { Container, Col, Row } from "reactstrap";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [randomJoke, setRandomJoke] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchRandomJoke = async () => {
            if (selectedCategory) {
                try {
                    const jokeData = await getCategoriesRandomJoke(selectedCategory);
                    setRandomJoke(jokeData);
                } catch (err) {
                    console.log(err);
                }
            }
        };

        fetchRandomJoke();
    }, [selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Container className="categories">
                <Row>
                    <Col className="categories__logo">
                        <h6>Categories</h6>
                    </Col>
                </Row>
                {randomJoke && (
                    <Row className="mt-2">
                        <Col>
                            <div className="card">
                                <h5 className="card-header">Random {selectedCategory} joke</h5>
                                <div className="card-body">
                                    <p className="card-text">{randomJoke.value}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                )}
                <Row className="mt-2">
                    {categories.map(category => (
                        <Col className='categories__category'
                            key={category} xl={4} sm={12} onClick={() => handleCategoryClick(category)}>
                            <h6>{category}</h6>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Categories;
