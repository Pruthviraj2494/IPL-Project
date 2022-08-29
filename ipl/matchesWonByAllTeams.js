const matchesWonByAllTeams = (matchData)=>{
    const setOfYears = new Set(matchData.map(eachMatch =>  eachMatch.season));
    const arrayOfYears = new Array(...setOfYears);

    const yearWiseTeams = {};
    arrayOfYears.map(eachYear => {
            matchData.map(eachMatch=>{
                if(eachMatch.season === eachYear){
                    if(yearWiseTeams[eachYear]){
                        yearWiseTeams[eachYear] = [...yearWiseTeams[eachYear],eachMatch.winner]
                    }else{
                        yearWiseTeams[eachYear] = [eachMatch.winner];
                    }
                }
            })
    })

    const winsEachYear = Object.values(yearWiseTeams);

    const winnersPerYear = winsEachYear.map(eachYear => eachYear.reduce((winCounts,currentTeam)=>{

        winCounts[currentTeam] = winCounts[currentTeam] ? winCounts[currentTeam]+=1 : 1 ;
        return winCounts;

    },{}))

    const matchesWonByAllTeamsPerYear = {};
     arrayOfYears.map((currentYear,index)=>{
        matchesWonByAllTeamsPerYear[currentYear] = winnersPerYear[index]
    })

    // console.log(matchesWonByAllTeamsPerYear);
    // let seriesData = Object.entries(matchesWonByAllTeamsPerYear).map(eachEntry => Object.fromEntries(eachEntry));
    // console.log(seriesData)
    return matchesWonByAllTeamsPerYear;
}
module.exports = matchesWonByAllTeams;



