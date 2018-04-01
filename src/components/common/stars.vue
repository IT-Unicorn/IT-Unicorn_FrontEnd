<template>
  <canvas ref="cavas" @mousemove="mouseLine($event.clientX,$event.clientY)">
      <slot>插槽</slot>
      <h1 style="z-index:1">sdlkjw </h1>
  </canvas>
</template>


<script>
export default {
  data() {
    return {
      ctx: "",
      cw: 0,
      ch: 0,
      num: 0,
      data: []
    };
  },
  methods: {
    init() {
      //初始化
      let can = this.$refs.cavas;
      //   can = document.getElementById("cavas");
      this.ctx = can.getContext("2d");
      this.cw = window.innerWidth;
      this.ch = window.innerHeight;
      can.width = this.cw;
      can.height = this.ch;
      this.num = 200;
      this.data = [];
      for (let i = 0; i < this.num; i++) {
        this.data[i] = {
          x: (Math.random() * this.cw) | 0,
          y: (Math.random() * this.ch) | 0,
          vx: Math.random() * 0.6 - 0.3,
          vy: Math.random() * 0.6 - 0.3
        };
        this.drawCircle(this.data[i].x, this.data[i].y);
      }
    },
    drawCircle(x, y) {
      //绘制小点
      let ctx = this.ctx;
      ctx.save();
      ctx.fillStyle = "#fffffc";
      ctx.beginPath();
      ctx.arc(x, y, 1, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
    drawLine(x1, y1, x2, y2) {
      //绘制连线
      let ctx = this.ctx;
      ctx.save();
      let color = ctx.createLinearGradient(x1, y1, x2, y2);
      color.addColorStop(0, "#fff");
      color.addColorStop(0.5, "#333333");
      color.addColorStop(1, "#fff");
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    moveCircle() {
      //移动点
      this.ctx.clearRect(0, 0, this.cw, this.ch);
      for (let i = 0; i < this.num; i++) {
        this.data[i].x += this.data[i].vx;
        this.data[i].y += this.data[i].vy;
        //边界值判断
        if (this.data[i].x > this.cw || this.data[i].x < 0) {
          this.data[i].vx = -this.data[i].vx;
        }
        if (this.data[i].y > this.ch || this.data[i].y < 0) {
          this.data[i].vy = -this.data[i].vy;
        }
        this.drawCircle(this.data[i].x, this.data[i].y);
        //勾股定理判断当前点与下个点
        for (let j = i + 1; j < this.num; j++) {
          if (
            Math.pow(this.data[j].x - this.data[i].x, 2) +
              Math.pow(this.data[j].y - this.data[i].y, 2) <=
            50 * 50
          ) {
            this.drawLine(
              this.data[i].x,
              this.data[i].y,
              this.data[j].x,
              this.data[j].y
            );
          }
        }
      }
    },
    //鼠标移动时绘制连线
    mouseLine(x,y) {

      if (x >= this.cw - 5 || y >= this.ch - 5 || x < 5 || y < 5) {
        this.data[0] = {
          x: Math.random() * this.cw,
          y: Math.random() * this.ch,
          vx: Math.random() * 0.6 - 0.3,
          vy: Math.random() * 0.6 - 0.3
        };
      } else {
        this.data[0] = {
          x: x,
          y: y,
          vx: 0,
          vy: 0
        };
      }
    }
  },
  mounted() {
    this.init();
    setInterval(() => {
      this.moveCircle();
    }, 1000/60);
    window.onresize = function() {
      this.init();
    };
  }
};
</script>