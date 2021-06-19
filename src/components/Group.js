import '../styles/Positions.css'

// debe mostrarla tabla de posiciones obtenida en groups

function Group({name, score, flag}) { 
    return (
        <div>
            <div className="table"><img className="flagg" src={flag} alt="lflag" />{name} - {score} pts</div><br></br>
        </div>
    )

}

export default Group