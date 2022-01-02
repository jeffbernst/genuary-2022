/**
 * PAINT EACH ONE
 */

// const codingTrain = [
//   '#B337E3', // purple
//   '#FC5FB2', // pink
//   '#37C5F5', // blue
//   '#FBF202', // yellow
//   '#FA9F4C', // orange
//   '#FA4E16', // red
// ]

// const smileWidth = 12

// let x = smileWidth / 2
// let y = smileWidth / 2

// function setup() {
//   createCanvas(4000, 4000)
//   angleMode(DEGREES)
//   noLoop()
// }

// function draw() {
//   smile(x, y)

//   if (x <= width - smileWidth) {
//     x += smileWidth
//   } else if (y <= height - smileWidth) {
//     x = smileWidth / 2
//     y += smileWidth
//   } else {
//     noLoop()
//   }
// }

// function smile(x, y) {
//   // head
//   fill(random(codingTrain))
//   circle(x, y, smileWidth)

//   // mouth
//   arc(x + 0, y + 1, 4, 4, 20, 160)

//   // eyes
//   fill(0)
//   circle(x + 2, y - 1, 1)
//   circle(x - 2, y - 1, 1)
// }

/**
 * ALL AT ONCE
 */

const codingTrain = [
  '#B337E3', // purple
  '#FC5FB2', // pink
  '#37C5F5', // blue
  '#FBF202', // yellow
  '#FA9F4C', // orange
  '#FA4E16', // red
]

let smileCount = 0;
const smileWidth = 12

function setup() {
  createCanvas(720, 720)
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  for (let y = smileWidth / 2; y < height; y += smileWidth) {
    for (let x = smileWidth / 2; x < width; x += smileWidth) {
      smile(x, y)
      smileCount += 3;
    }
  }
  console.log(smileCount)
}

function smile(x, y) {
  // head
  fill(random(codingTrain))
  circle(x, y, smileWidth)
  // mouth
  arc(x + 0, y + 1, 4, 4, 20, 160)
  // eyes
  fill(0)
  circle(x + 2, y - 1, 1)
  circle(x - 2, y - 1, 1)
}
