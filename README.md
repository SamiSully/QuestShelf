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

## Sprint 2 Feeatures
- Filters saved fames via play status
- Sorted games alphabetically
- Remove gaes with a confirmaton pop up prompt
-redesigned entire interface with a medieval cyberpunk aesthetic

## SOLID Principles

- Single Responsibility Principle: Seperated the filtering and sorting logic from display logic in gameLogic.js
- Dependenct Inversion Principle: The removal function recieves its storage dependency rather than it directly relying on the localStorage

## Automated Testing

Node.js 22 or newer is recommended. There are no additional packages that are required

In order to rune the automated test, just enter node --test in the terminal within the project folder

The test include 1 automated tests that cover filtering, sorting, game removal, data preservation, and edge cases

## How to Test Sprint 2 features

1. Add around 4/5 games with different play statuses
2. Filter dames by their play status
3. Sort games alphabetically
4. Remove a game and confrim the removal
5. Refresh the page to verify that the removed fame remains deleted

## Known Limitations 
- The game dat is still stored in the users localStorgae 
- User accounts and cloud storage are not able to currently be implemented
The font requires and internet connecter to be able to load