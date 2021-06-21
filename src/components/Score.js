import '../styles/Scores.css'

function Score(props) {
    return (
        <div>{/*  muestra cada usuario y su posicion */}
        {props.pos} - {props.usuario} - Puntaje {props.score}
    </div>
    )
}

export default Score