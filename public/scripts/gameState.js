const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

let frames = 0;

// loading sprite image
const sprite = new Image();
sprite.src = "image/sprite.png";

// game state
const state = {
  current: 0,
  getReady: 0,
  game: 1,
  over: 2,
};

const startBtn = {
  x: 120,
  y: 263,
  w: 83,
  h: 29,
};

// control the game
cvs.addEventListener("click", function (evt) {
  switch (state.current) {
    case state.getReady:
      state.current = state.game;
      break;
    case state.game:
      bird.flap();
      break;
    case state.over:
      pipes.reset();
      bird.speedReset();
      score.reset();
      state.current = state.getReady;

      break;
  }
});
