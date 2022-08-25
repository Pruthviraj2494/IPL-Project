const strikeRate = (deliveryData,matchData)=>{
    

    const player = deliveryData.filter( PlayerData=>PlayerData.batsman === "MS Dhoni")
                               
    let seasonData = player.map((seasonwise)=> {
        let year = matchData.filter((yearWise)=> yearWise.id===seasonwise.match_id).map((yearWise)=> yearWise.season)
                seasonwise.season = year[0]
                    return seasonwise
                })
                               
    
    let StrikeRateOfBatsMAn = seasonData.reduce((accumulator,currentValue)=> {
        if(!currentValue.match_id ==" "){
            if(accumulator[currentValue.season]){
                accumulator[currentValue.season]["runs"] += parseInt(currentValue.batsman_runs)
                accumulator[currentValue.season]['balls'] ++
                accumulator[currentValue.season]['StrikeRate'] = parseFloat((accumulator[currentValue.season]['runs']/accumulator[currentValue.season]['balls'])*100).toFixed(2)
            } else {
                accumulator[currentValue.season] = {}
                accumulator[currentValue.season]['runs'] = parseInt(currentValue.batsman_runs)
                accumulator[currentValue.season]['balls'] = 1
                }
            }
        return accumulator;
    
    },{})

    const result = {}

    result["MS Dhoni"] = StrikeRateOfBatsMAn

    return result;
                           

}

module.exports = strikeRate;


