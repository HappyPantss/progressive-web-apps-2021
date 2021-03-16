export default async function cleanData(userStats) {
    userStats.competitiveStats.topHeroes = Object.entries(userStats.competitiveStats.topHeroes).map(x => { // Map the array
        return {
            name: x[0], // Key
            ...x[1] // Value
        }
    })
    return userStats
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries