const wonTossAndMatch = (matches)=>{
    let result = {};
    
    matches.map((match) =>{
        result[match.toss_winner]  = match["toss_winner"] === match["winner"] && result[match.toss_winner] ? result[match.toss_winner] += 1 : 1;

    })

    return result;
}

module.exports = wonTossAndMatch;