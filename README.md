# QuestShelf

## Project Overview

QuestShelf is a personal video game tracking application that I developed for my Fundementals of Software Engineering class. 

## Sprint 1 Features

- Able to add games with a title, platform, and the current play status.
- Able to update an already saved game's play status.
- The user can now view his collection via My Shelf.
- Validate required game information.
- Saves game information via browser localStorage.

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser localStorage

## Author 

Sami Suleiman

## Hoow to Run

1. Download the clone.
2. Open the project folder via VS Code.
3. Open index.html in a browser ( PErferably using VS Code Live Server).

### no other dependencies or database installation is needed

## How to Test

1. Enter a game title and select the associated genre, platform, and play status of the game.
2. Click "Add Game" and verify that the game appears on "My Shelf".
3. Change the saved games play status via the drop down menu within "My Shelf".
4. Refresh the browser and carify that the updated status remains saved .
5. Attempt to submit a game without add a title, genre, ora platform. An error message should appear. 

## Known Limitations 

- The Shelf information is stored locally in the browser rather than on a server.
- Game are not scynchronizedd between browser or devices.
- Advanced sorting, filtering, and game ratings are planned for future sprints.