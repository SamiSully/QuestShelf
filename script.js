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

    if (games.length === 0) {
        gameList.textContent = "Your Shelf is empty. Add your first game!";
        return;
    }
  games.forEach(function(game,  index ) {
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
        gameCard.appendChild(gameTitle);
        gameCard.appendChild(gameDetails);
        gameCard.appendChild(statusSelect);
        gameList.appendChild(gameCard);
    });
}

displayGames();