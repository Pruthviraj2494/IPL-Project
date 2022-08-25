const extraRunConceded = (deliveriesData,matchData)=>{
    
    let matchesId = matchData.map(eachMatch => eachMatch.id)

    let result = {};


    deliveriesData.map(deliveries => {
        if(matchesId.includes(deliveries.match_id)){

            const extraRun = deliveries.extra_runs;
            const team = deliveries.bowling_team;
            
            result[team] =  result[team]  ?  result[team] += parseInt(extraRun) : parseInt(extraRun) ;

            }
        });

    return result;
}
module.exports = extraRunConceded;