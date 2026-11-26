function filterGames(games, status) {
    if (status === "All") {
        return [...games];}

    return games.filter(function(game) {
        return game.status === status;}
    );}

function sortGames(games, sortOption) {
    const sortedGames = [...games];
    if (sortOption === "az") {
       
        sortedGames.sort(function(a, b) {
            return a.title.localeCompare(b.title);
        });}
    return sortedGames;
}

function removeGame(games, index, storage) {
    if (!Number.isInteger(index) || index < 0 || index >= games.length) {
        return games;
    }

    const updatedGames = [...games];
    updatedGames.splice(index, 1);



    
    storage.setItem("questshelfGames", JSON.stringify(updatedGames));



    return updatedGames;
}



if (typeof module !== "undefined") {
    module.exports = { filterGames, sortGames, removeGame };
}