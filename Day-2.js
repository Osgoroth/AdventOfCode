//
// Day - 2
//
import { STRATEGY_GUIDE } from "./STRATEGY_GUIDE.js";

// A = Rock = X = 1 point
// B = Paper = Y = 2 points
// C = Scissors = Z = 3 points
const plays = {
  winning: {
    A: "Y",
    B: "Z",
    C: "X",
  },
  losing: {
    A: "Z",
    B: "X",
    C: "Y",
  },
  drawing: {
    A: "A",
    B: "B",
    C: "C",
  },
};
const points = {
  X: 1,
  Y: 2,
  Z: 3,
};
// X beats C
// Y beats A
// Z beats B
const win = 6;
const lose = 0;
const draw = 3;
// 0 = lose
// 3 = draw
// 6 = win
//  array is in format [opponent, player(me)]
//
// Day - 2 -- Part 1
//
const cleanData = STRATEGY_GUIDE.split("\n").map((pairing) =>
  pairing.split(" ")
);

let [wins, losses, draws] = [0, 0, 0];
let score = 0;
let counter = 0;

cleanData.map(([opponent, player]) => {
  //logic to decide score

  if (plays.winning[opponent] === player) {
    score += win + points[player];
    wins++;
    return;
  }
  if (plays.losing[opponent] === player) {
    // console.log("Losar");
    score += lose + points[player];
    losses++;
    return;
  }
  // console.log("Draw");
  score += draw + points[player];
  draws++;
  return;
  //   console.log(player, opponent);
});
//
console.log(score);
console.log(`Wins: ${wins}, Draws: ${draws}, Losses ${losses}`);

//
// Day - 2 -- Part 2
//

// X = need to lose - plays.losing
// Y = need to draw - plays.drawing
// Z = need to win - plays.winning

let score2 = 0;
const points2 = {
  A: 1,
  B: 2,
  C: 3,
};
const plays2 = {
  winning: {
    A: "B",
    B: "C",
    C: "A",
  },
  losing: {
    A: "C",
    B: "A",
    C: "B",
  },
  drawing: {
    A: "A",
    B: "B",
    C: "C",
  },
};

cleanData.map(([opponentsPlay, strategy]) => {
  // trying to spice things up with a switch instead of if else if else
  switch (strategy) {
    case "X":
      // look in points2 for the losing combination using the oponents play, if the opponents play is A plays2.losing[A] => C then points2[C] => 3 + lose (0) = 3
      score2 += lose + points2[plays2.losing[opponentsPlay]];
      break;
    case "Y":
      // look in points2 for the losing combination using the oponents play, if the opponents play is B plays2.drawing[B] => B then points2[B] => 3 + draw (3) = 6
      score2 += draw + points2[plays2.drawing[opponentsPlay]];
      break;
    case "Z":
      score2 += win + points2[plays2.winning[opponentsPlay]];
      break;
  }
});

console.log(score2);
