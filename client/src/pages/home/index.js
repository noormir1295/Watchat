import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import PlatformButtons from "../../components/PlatformButtons";
import MovieCard from "../../components/MovieCard";
import API from "../../utils/API";
// import { propTypes } from "react-bootstrap/esm/Image";


function Home(props) {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState('')

    useEffect(() => {
        if (props.search && props.search.location === window.location.hash) {
            setSearch(props.search.query);

            API.omdbSearch(props.search.query)
                .then((res) => {
                    const response = res.Search;
                    let results = response;
                    // map through the array
                    results = results.map((result) => {
                        // store each movie information in a new object
                        result = {
                            key: result.imdbID,
                            id: result.imdbID,
                            poster: result.Poster,
                            title: result.Title,
                            // year: result.Year,
                            // type: result.Type,
                        };
                        return result;
                    });
                    console.log("response", response)
                    console.log("movies", results)
                    setResults(results)
                })
                .catch((err) => {
                    console.log('ERROR ' + err);
                });
        };
    }, [props.search])

    return (results.length === 0) ? (
        <div className="container">
            <Row className="title-row">
                <Col >
                    <h1>Home</h1>
                </Col>
            </Row>
            <Row className="platform-buttons">
                <Col>
                    <PlatformButtons />
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col>
                    <CategoryButtons />
                </Col>
            </Row>
        </div>
    ) : (
            <div className="container">
                <Row className="title-row">
                    <Col >
                        <h1>Home</h1>
                    </Col>
                </Row>
                <Row className="platform-buttons">
                    <Col>
                        <PlatformButtons />
                    </Col>
                </Row>
                <Row className="buttons-row">
                    <Col>
                        <CategoryButtons />
                    </Col>
                </Row>
                <Row>
                {results.map(results => {
                    return (
                        
                            <Col md="3">
                                <MovieCard
                                    id={results.id}
                                    title={results.title}
                                    poster={results.poster}
                                />
                            </Col>
                    )
                })}
                </Row>
            </div>
        )
}

export default Home;
