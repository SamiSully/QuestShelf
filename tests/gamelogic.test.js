const test = require("node:test");
const assert = require("node:assert/strict");
const { filterGames, sortGames } = require("../gameLogic.js");

const games = [
    { title: "Overwatch", status: "Currently Playing" },
    { title: "Elden Ring", status: "Waitlist" },
    { title: "Cyberpunk 2077", status: "Finished" }
];

test("Filter games by play status", function() {
    const result = filterGames(games, "Finished");
    assert.deepEqual(result, [games[2]]);



    
});

test("Display all games", function() {
    const result = filterGames(games, "All");
    assert.deepEqual(result, games);
});



test("Sort games alphabetically", function() {
    const result = sortGames(games, "az");

    assert.deepEqual(result, [
        games[2], games[1], games[0]
    ]);
});



test("Sorting and filtering preserve original data", function() {
    const original = JSON.stringify(games);

    sortGames(games, "az");
    filterGames(games, "Finished");


    assert.equal(JSON.stringify(games), original);


});

test("Filter with no matching games", function() {
    const result = filterGames([games[0]], "Finished");
    assert.deepEqual(result, []);
});

test("Default sorting preserves original order", function() {
    assert.deepEqual(sortGames(games, "default"), games);
});