const score = {
  best: parseInt(localStorage.getItem("best")) || 0,
  value: 0,

  draw: function () {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    if (state.current == state.game) {
      ctx.lineWidth = 2;
      ctx.font = "35px Teko";
      ctx.fillText(this.value, cvs.width / 2, 50);
      ctx.strokeText(this.value, cvs.width / 2, 50);
    } else if (state.current == state.over) {
      // Score value
      ctx.font = "25px Teko";
      ctx.fillText(this.value, 225, 145);
      ctx.strokeText(this.value, 225, 145);
      // Best score
      ctx.fillText(this.best, 225, 185);
      ctx.strokeText(this.best, 225, 185);
    }
  },
  reset: function () {
    this.value = 0;
  },
};
