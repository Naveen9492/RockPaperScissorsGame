Rock Paper Scissors Game 🎮✂️🪨

This is a React-based Rock Paper Scissors game built using React, Styled Components, and React Popup. The game allows a user to play against a computer opponent with live score tracking and a results view.

You can see the live version here: Live Demo

🎯 Features

Interactive Game Play

Click Rock, Paper, or Scissors to make a choice.

Opponent choice is randomly generated on each turn.

The game displays the result view showing your choice, opponent choice, and the result (YOU WON, YOU LOSE, IT IS DRAW).

Score Tracking

The score is displayed at the top and updates automatically based on game results.

YOU WON → score increments by 1

YOU LOSE → score decrements by 1

IT IS DRAW → score remains the same

Rules Popup

Clicking the Rules button opens a modal with the game rules.

The modal can be closed with a close icon button (RiCloseLine).

Play Again Functionality

Clicking PLAY AGAIN returns the user to the initial playing view.

📂 Project Structure

All components are in the src/components directory:

Home – Main container and game logic

Header – Displays game title and score

Popup – Rules modal

Styled components for layout, buttons, and images

choicesList provides the three game choices:

const choicesList = [
  { id: 'ROCK', imageUrl: 'rock-image.png' },
  { id: 'SCISSORS', imageUrl: 'scissors-image.png' },
  { id: 'PAPER', imageUrl: 'paper-image.png' },
]

🎨 Styling

Colors

Dark Blue: #223a5f – background

White: #ffffff – text & modal background

Fonts

Score: Roboto

Buttons/Headers: Bree Serif

Layout

Responsive design for all screen sizes (<576px, >=576px, >=768px)

Flexbox and Grid used for button arrangement

Styled components for reusable buttons, cards, and containers

⚙️ Implementation Details

Result Calculation

if (yourChoice === opponentChoice) result = 'IT IS DRAW'
else if ((yourChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
         (yourChoice === 'PAPER' && opponentChoice === 'ROCK') ||
         (yourChoice === 'SCISSORS' && opponentChoice === 'PAPER')) result = 'YOU WON'
else result = 'YOU LOSE'


State Management

score – Tracks game score

yourChoice – Stores user's selection

oppenentChoice – Stores computer selection

resultView – Toggles between playing view and result view

matchResult – Stores game result text

Popup & Modal

Uses reactjs-popup

Close button uses RiCloseLine icon

Rules image is displayed dynamically

🖼️ Screenshots

Playing View:

<div align="center"> <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-playing-output.png" alt="Playing View" width="400"> </div>

Result View:

<div align="center"> <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-game-results-output.png" alt="Result View" width="400"> </div>

Rules Modal:

<div align="center"> <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-rules-output.png" alt="Rules Modal" width="400"> </div>

⚡ How to Run Locally

Clone the repository:

git clone https://github.com/naveen9492/RockPaperScissorsGame.git
cd RockPaperScissorsGame


Install dependencies:

npm install


Start the development server:

npm start

🚀 Deployment

The app is deployed on GitHub Pages:
https://naveen9492.github.io/RockPaperScissorsGame/

Deployed using gh-pages branch and npm run deploy.
