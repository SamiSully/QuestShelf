const gameForm = document.getElementById("game-form");

gameForm.addEventListener("submit", function(event) {
    event.preventDefault();


    const title = document.getElementById("game-title").value.trim();

    
    
if (title === "") {
        alert("Please enter a game title.");
        return;
    }
   
    const genre = document.getElementById("game-genre").value;
    const platform = document.getElementById("game-platform").value;
    const status = document.getElementById("game-status").value;
        if (genre === "" || platform === "") {
             alert("Please select a genre and platform.");
    return;
    }
    const game = {
        title: title,
        genre: genre,
        platform: platform,
        status: status
    };

    const games = JSON.parse(localStorage.getItem("questshelfGames")) || [];

    games.push(game);

    localStorage.setItem("questshelfGames", JSON.stringify(games));
    
    displayGames();

    alert(title + " was added to your Shelf!");
    gameForm.reset();
});
 function displayGames() {
    const gameList = document.getElementById("game-list");
    const games = JSON.parse(localStorage.getItem("questshelfGames")) || [];

    gameList.innerHTML = "";
    const filterStatus = document.getElementById("filter-status").value;
    const sortOption = document.getElementById("sort-games").value;

    const filteredGames = filterGames(games, filterStatus);
    const displayedGames = sortGames(filteredGames, sortOption);
    if (games.length === 0) {
        gameList.textContent = "Your Shelf is empty. Add your first game!";
        return;
    }

    if (displayedGames.length === 0) {
        gameList.textContent = "No games match your selected filter.";
        return;
    }
  displayedGames.forEach(function(game) {
    const index = games.indexOf(game);
    const gameCard = document.createElement("div");

        const gameTitle = document.createElement("h3");
        gameTitle.textContent = game.title;

        const gameDetails = document.createElement("p");
        gameDetails.textContent =
            "Genre: " + game.genre +
            " | Platform: " + game.platform +
            " | Status: " + game.status;
  const statusSelect = document.createElement("select");

  const statuses = ["Waitlist", "Currently Playing", "Finished"];



statuses.forEach(function(status) {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;

    if (status === game.status) {
        option.selected = true;
    }

    statusSelect.appendChild(option);
});
statusSelect.addEventListener("change", function() {
    games[index].status = statusSelect.value;
    localStorage.setItem("questshelfGames", JSON.stringify(games));

   
    
    displayGames();
});
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Game";
        removeButton.className = "remove-button";

        removeButton.addEventListener("click", function() {
    if (confirm("Remove " + game.title + " from your Shelf?")) {
        removeGame(games, index, localStorage);
        displayGames();}

    });
        gameCard.appendChild(gameTitle);
        gameCard.appendChild(gameDetails);
        gameCard.appendChild(statusSelect);
        gameCard.appendChild(removeButton);
        gameList.appendChild(gameCard);
    });
}
document.getElementById("filter-status").addEventListener("change", displayGames);
document.getElementById("sort-games").addEventListener("change", displayGames);


displayGames();