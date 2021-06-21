function Jugado(props){
    return (
        <div>
            {props.local}: {props.lscore} vs {props.visitante}: {props.vscore}. {props.points} puntos.
        </div>
    )
}

export default Jugado