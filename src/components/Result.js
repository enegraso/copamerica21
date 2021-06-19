import '../styles/Match.css'


function Result({date, local, visitante, lflag, vflag, lresult, vresult, mresult}){
    let dates = new Date(date.toString());
    return (
        <div className="boxteam">
        <div className="titteam">{dates.toLocaleDateString()}</div>
        <div className="flagcontainer"><img className="flag" src={lflag} alt="lflag" /><img className="flag" src={vflag} alt="vflag" /></div>
        <div className="teamcontainer"><div className="team">{local} - vs - {visitante}</div></div>
        <div className="teamcontainer"><div className="result">{lresult}  :  {vresult}</div></div>      
         </div>
    )
}

export default Result

