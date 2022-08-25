const csv = require("csvtojson");
const fs = require("fs");``

const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByAllTeams = require("./ipl/matchesWonByAllTeams");
const extraRunConceded = require("./ipl/extraRunConceded");
const economicalBowlers = require("./ipl/economicalBowlers");
const matchesWonByMiEachYear = require("./ipl/matchesWonByMiEachYear");
const wonTossAndMatch = require("./ipl/wonTossAndMatch")
const playerOfTheMatch = require("./ipl/playerOfTheMatch");
const strikeRate = require("./ipl/strikeRate");
const bestEconomyInSuperOvers = require("./ipl/bestEconomyInSuperOvers");
const highestDismissal = require("./ipl/highestDismissal");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH ="./csv_data/deliveries.csv";

const JSON_OUTPUT_FILE_PATH = "./public/data.json";




const saveMatchesData = (tempData)=>{
    const jsonData = {}

    let matchData = [
        "matchesPlayedPerYear",
        "matchesWonByAllTeamsEachYear",
        "extraRunConceded",
        "economicalBowlersYear",
        "matchesWonByMiEachYear",
        "wonTossAndMatchData",
        "strikeRateData",
        "playerOfTheMatchData",
        "bestEconomyInSuperOversData",
        "highestDismissalData"

    ];


    tempData.map((data,index) => {
        jsonData[matchData[index]] = data;

    });


    const jsonString = JSON.stringify(jsonData);
    fs.writeFileSync(JSON_OUTPUT_FILE_PATH, jsonString, (error)=>{          // writing into data.json file //
        error && console.log(error); 
    }); 

}


async function main(){
    await csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
        csv()
        .fromFile(MATCHES_FILE_PATH)
        .then(matches => {
            const matchesPlayedPerData = matchesPlayedPerYear(matches);  // 1st question //

            const matchesWonByAllTeamsData = matchesWonByAllTeams(matches);  // 2nd question //

            const matchData2016 = matches.filter((eachMatch) => eachMatch.season === '2016');
            const extraRunConcededData = extraRunConceded(deliveries,matchData2016);  // 3rd question //

            const matchData2015 = matches.filter((eachMatch) => eachMatch.season === '2015');
            const economicalBowlersData = economicalBowlers(deliveries,matchData2015);  // 4th question //

            const matchesWonByMiData = matchesWonByMiEachYear(matches); // 5th question //

            const wonTossAndMatchData = wonTossAndMatch(matches);  // 6th question //

            const playerOfTheMatchData = playerOfTheMatch(matches); //7th question//

            const strikeRateData = strikeRate(deliveries,matches);  // 8th question //

            const highestDismissalData = highestDismissal(deliveries); //9th question //

            const bestEconomyInSuperOversData = bestEconomyInSuperOvers(deliveries); // 10th question //

            let resultData = [
                            matchesPlayedPerData,
                            matchesWonByAllTeamsData,
                            extraRunConcededData,
                            economicalBowlersData,
                            matchesWonByMiData,
                            wonTossAndMatchData,
                            strikeRateData,
                            playerOfTheMatchData,
                            bestEconomyInSuperOversData,
                            highestDismissalData
                        ];
            saveMatchesData(resultData);
        });
    });
    
}


main();