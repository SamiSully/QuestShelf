const test = require("node:test");
const assert = require("node:assert/strict");
const { removeGame } = require("../gameLogic.js");

const games = [
    { title: "Overwatch" },
    { title: "Elden Ring" },
    { title: "Cyberpunk 2077" }
];

function createTestStorage() {
    return {
        data: {},
        setItem: function(key, value) {
            this.data[key] = value;
        }
    };
}

test("Remove the selected game", function() {
    const storage = createTestStorage();
    const result = removeGame(games, 1, storage);

    assert.deepEqual(result, [games[0], games[2]]);
});

test("Save updated games after removal", function() {
    const storage = createTestStorage();
    const result = removeGame(games, 1, storage);

    assert.equal(
        storage.data["questshelfGames"],
        JSON.stringify(result)
    );
});

test("Reject an invalid game index", function() {
    const storage = createTestStorage();

    assert.deepEqual(removeGame(games, 10, storage), games);
    assert.deepEqual(storage.data, {});
});

test("Reject removal from an empty Shelf", function() {
    const storage = createTestStorage();

    assert.deepEqual(removeGame([], 0, storage), []);
    assert.deepEqual(storage.data, {});
});

test("Removal does not modify the original array", function() {
    const storage = createTestStorage();
    const original = JSON.stringify(games);

    removeGame(games, 1, storage);

    assert.equal(JSON.stringify(games), original);
});