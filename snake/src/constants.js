//設定範圍
const CANVAS_SIZE = [800, 800];
//起始點
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
//food
const APPLE_START = [8, 3];
//大小
const SCALE = 40;
//速度
const SPEED = 100;
//設定方向
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};
