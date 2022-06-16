const bird = {
  speed: 0,
  gravity: 0.2,
  jump: 3,
  radius: 12,
  frame: 0,

  animation: [
    { sX: 6, sY: 982 },
    { sX: 62, sY: 982 },
    { sX: 118, sY: 982 },
    { sX: 62, sY: 982 },


  ],
  x: 50,
  y: 150,
  w: 34,
  h: 24, 

  draw: function () {
    let bird = this.animation[this.frame];

    ctx.drawImage(
      sprite,
      bird.sX,
      bird.sY,
      this.w,
      this.h,
      this.x - this.w / 2,
      this.y - this.h / 2,
      this.w,
      this.h
    );
  },
  flap: function () {
    this.speed = -this.jump;
  },
  update: function () {
    this.peroid = 5;
    // increment the frame by 1,each peroid
    this.frame += frames % this.peroid == 0 ? 1 : 0;
    // frame goes from 0 to 4 then again to 0
    this.frame = this.frame % this.animation.length;

    if (state.current == state.getReady) {
      this.y = 150;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;
      if (this.y + this.h / 2 >= cvs.height - fg.h) {
        this.y = cvs.height - fg.h - this.h / 2;
        if (state.current == state.game) {
          state.current = state.over;
        }
      }
      // if the speed is greater than the jumo means the bird is falling down
      if (this.speed >= this.jump) {
        this.frame = 1;
      }
    }
  },
  speedReset: function () {
    this.speed = 0;
  },
};
