import { creatButton } from "../../component/button.js";
import { goTo } from "../../services/route.js";
import { justABrTag } from "../../component/generale.js";

const canvasWidth = 800;
const canvasHeight = 600;
const canvas = document.createElement('canvas');
let pressedKeys = {};

// Establish a WebSocket connection
const socket = new WebSocket('ws://localhost:8765');

// Game state
let gameState = {
    paddle1_position: {x: 0, y: 0},
    paddle2_position: {x: 0, y: 0},
    ball_position: {x: 0, y: 0},
    ball_velocity: {x: 0, y: 0},
    score1: 0,
    score2: 0,
    winner : NaN,
    is_finished: false,
    is_started: false,

    canvas: {width: canvasWidth, height: canvasHeight},

};

// Send player movement to the server
function sendPlayerMovement(player, position) {
    const message = JSON.stringify({player, position});
    socket.send(message);
}

// Handle incoming messages (game state updates)
socket.onmessage = function(event) {
    gameState = JSON.parse(event.data);
    updateResult();
    drawGame();
};

const updateResult = () => {
    const resultPlayer1 = document.getElementById('result-player1');
    const resultPlayer2 = document.getElementById('result-player2');
    resultPlayer1.innerHTML = `Player 1: ${gameState.score1}`;
    resultPlayer2.innerHTML = `Player 2: ${gameState.score2}`;
}

// Draw the game
function drawGame() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw the ball
    ctx.beginPath();
    ctx.arc(gameState.ball_position.x, gameState.ball_position.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Draw the players
    ctx.fillStyle = 'rgba(231, 190, 77, 1)';
    ctx.fillRect(gameState.paddle1_position.x, gameState.paddle1_position.y, 10, 50);
    ctx.fillRect(gameState.paddle2_position.x, gameState.paddle2_position.y, 10, 50);

    gameState.score1 = 1;
}


document.addEventListener('keydown', function(event) {
    pressedKeys[event.key] = true;
    updatePlayerPositions();
});

document.addEventListener('keyup', function(event) {
    delete pressedKeys[event.key];
    updatePlayerPositions();
});

function updatePlayerPositions() {
    let player1Pos = gameState.paddle1_position;
    let player2Pos = gameState.paddle2_position;

    if (pressedKeys['ArrowUp'] && player1Pos.y > 0) player1Pos.y -= 10;
    if (pressedKeys['ArrowDown'] && (player1Pos.y + 50) < 600) player1Pos.y += 10;

    if (pressedKeys['w'] && player2Pos.y > 0) player2Pos.y -= 10;
    if (pressedKeys['s'] && (player2Pos.y + 50) < 600) player2Pos.y += 10;

    console.log(gameState);

    sendPlayerMovement('player1', player1Pos);
    sendPlayerMovement('player2', player2Pos);
}



export default function Playe() {
    const element = document.createElement('div');
    element.setAttribute('class', 'play-offline');

    const tmpTitle = document.createElement('p');
    tmpTitle.innerHTML = 'Play offline';
    
    const btnBack = creatButton('true', 'btn-xl', 'btn-primary', 'Back');
    btnBack.addEventListener('click', () => {
        goTo('/game');
    });
    
    const result = document.createElement('div');
    result.setAttribute('class', 'result');

    const resultPlayer1 = document.createElement('p');
    resultPlayer1.setAttribute('class', 'result-number');
    resultPlayer1.setAttribute('id', 'result-player1');
    resultPlayer1.innerHTML = 'Player 1: 0';

    const resultPlayer2 = document.createElement('p');
    resultPlayer2.setAttribute('class', 'result-number');
    resultPlayer2.setAttribute('id', 'result-player2');
    resultPlayer2.innerHTML = 'Player 2: 0';

    result.appendChild(resultPlayer1);
    result.appendChild(resultPlayer2);

    
    canvas.setAttribute('class', 'test-canvas');
    canvas.setAttribute('id', 'game');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    drawGame();
    
    element.appendChild(tmpTitle);
    element.appendChild(result);
    element.appendChild(canvas);
    element.appendChild(justABrTag());
    element.appendChild(btnBack);


    return element;
}



