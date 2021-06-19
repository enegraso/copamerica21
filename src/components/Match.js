import '../styles/Match.css'


function Match({date, local, visitante, lflag, vflag}){
    let dates = new Date(date.toString());
    return (
        <div className="boxmatch">
        <div className="titteam">{dates.toLocaleDateString()}</div>
        <div className="flagcontainer"><img className="flag" src={lflag} alt="lflag" /><img className="flag" src={vflag} alt="vflag" /></div>
        <div className="teamcontainer"><div className="team">{local} - vs - {visitante}</div></div>
        </div>
    )
}

export default Match