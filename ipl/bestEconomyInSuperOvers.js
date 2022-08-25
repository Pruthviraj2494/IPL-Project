const bestEconomyInSuperOvers = (deliveries)=>{
    const superOverBalls = deliveries.filter(eachDelivery => Number(eachDelivery.is_super_over) > 0 );

    let tempData = {};
    superOverBalls.forEach(deliveries => {
        const totalRuns = deliveries.total_runs;
        const bowler = deliveries.bowler;
        let balls = 1;
            
        if(tempData[bowler]){
            // let ballCount = parseInt(deliveries.ball) <= 6 ? 1 : 0    // counting balls //
            tempData[bowler][0]+=(parseInt(totalRuns) );
            tempData[bowler][1]+=1;
        }else{
            tempData[bowler]=[parseInt(totalRuns),balls];
        }
    })



    const findEconomy = (bowlerStats,bowlerNames)=>{

        const tempResult = {}

        bowlerNames.map((bowler,index) =>{

        const overs = bowlerStats[index][1]/6;

        const economy = bowlerStats[index][0]/overs;

        tempResult[bowler] = economy;

        })

        return tempResult;
    }

    const bowlerStats = Object.values(tempData);
    const bowlerName = Object.keys(tempData);
    const economyOfBowlers = findEconomy(bowlerStats,bowlerName);



    const result = Object.fromEntries(
    Object.entries(economyOfBowlers).sort(([,a],[,b]) => a-b).slice(0,10)
    );

    return result;

}

module.exports = bestEconomyInSuperOvers;