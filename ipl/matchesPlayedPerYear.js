const matchesPlayedPerYear = (matches)=>{
    const result = {};

    matches.map(match => {
        const season = match.season
        result[season] = result[season] ? result[season]+=1 : 1;

    })
    return result;
}

module.exports = matchesPlayedPerYear;