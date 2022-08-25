const matchesWonByMiEachYear = (matchData)=>{

    const matchsWonByMi = matchData.filter(eachMatch => eachMatch.winner === "Mumbai Indians");  //Filtering Matches won by MI//

    let result = {}
    matchsWonByMi.map(match => { 
        result[match.season] = result[match.season] ? result[match.season]+=1 : 1;
    });

    return result
}

module.exports = matchesWonByMiEachYear;