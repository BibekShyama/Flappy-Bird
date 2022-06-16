// Starting Splash Card
const getReady = {
  sX: 706,
  sY: 236,
  w: 106,
  h: 58,
  x: cvs.width / 2 - 106 / 2,
  y: 80,

  draw: function () {
    if (state.current == state.getReady) {
      ctx.drawImage(
        sprite,
        this.sX,
        this.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h
      );
    }
  },
};

// game over Splash Card
const gameOver = {
  sX: 6,
  sY: 518,
  w: 226,
  h: 114,
  x: cvs.width / 2 - 226 / 2,
  y: 90,

  draw: function () {
    if (state.current == state.over) {
      ctx.drawImage(
        sprite,
        this.sX,
        this.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h
      );
    }
  },
};
