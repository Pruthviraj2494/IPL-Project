const playerOfTheMatch = (matches)=>{

    let playerOfTheMatchArray = {}

    matches.map(match=> {
        playerOfTheMatchArray[match.season] = playerOfTheMatchArray[match.season] ? 
                                              [...playerOfTheMatchArray[match.season],match.player_of_match] : 
                                              [match.player_of_match]
    })


    const getAwardWinner = (palyers)=>{             // getting most frequent names in playersArray //

        let result = {};
        let maxPlayerOfMatch = palyers[0]
        let maxCount = 1;

        palyers.map((palyer)=>{
            
            result[palyer] = result[palyer] ?  result[palyer]+=1 : 1;

            if(result[palyer] > maxCount){

                maxCount = result[palyer] 
                maxPlayerOfMatch = palyer 
            }
        })

        return maxPlayerOfMatch;
    }
    

    const palyersArray = Object.values(playerOfTheMatchArray);
    const year = Object.keys(playerOfTheMatchArray);


    const playerOfTheYear = palyersArray.map(eachPlayer => getAwardWinner(eachPlayer))
   
    const palyerOfTheMatchEachYear = {};

    playerOfTheYear.map((eachPlayer,index) => palyerOfTheMatchEachYear[year[index]] = eachPlayer);

    return palyerOfTheMatchEachYear;

}

module.exports = playerOfTheMatch;