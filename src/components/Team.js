import '../styles/Team.css'


function Team ({team, flag, info}){
    return (
        <div className="boxteam">
        <div className="titteam">{team}</div>
        <div><img className="flagt" src={flag} alt="flag" /></div>
        </div>
    )
}

export default Team