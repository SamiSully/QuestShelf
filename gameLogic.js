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