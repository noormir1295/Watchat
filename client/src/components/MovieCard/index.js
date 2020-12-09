import { Card } from "react-bootstrap";


function MovieCard(props) {
    console.log(props)
    return (
        <Card key={props.id}>
            <Card.Img id={props.id} variant="top" src={props.poster} />

            <Card.Text>
                <p>{props.title}</p>
            </Card.Text>

        </Card>
    )
}

export default MovieCard;