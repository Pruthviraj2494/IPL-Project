const highestDismissal = (deliveriesData)=>{

    const palyerDismissal = deliveriesData.filter(eachDelivery => eachDelivery.player_dismissed === "V Kohli" && eachDelivery.dismissal_kind !== "run out");
    
    let stats =  {};
    palyerDismissal.forEach((eachDelivery)=>{
        stats[eachDelivery.player_dismissed] = stats[eachDelivery.player_dismissed] ? [...stats[eachDelivery.player_dismissed], eachDelivery.bowler] : [eachDelivery.bowler];
    })



    const getMostCommanBowler = (stats)=>{             // getting most comman bowler //

        let result = {};
        let maxDismissal = Object.values(stats)[0][0]
        let maxCount = 0;

        Object.values(stats)[0].map((bowler)=>{
            
            result[bowler] = result[bowler] ?  result[bowler]+=1 : 1;

            if(result[bowler] > maxCount){

                maxCount = result[bowler] 
                maxDismissal = bowler
            }
        })

         return maxDismissal
    }

    const bowlerName = getMostCommanBowler(stats);
    
    let result = {}
    result[Object.keys(stats)] = bowlerName

    return result;

}

module.exports = highestDismissal;