import { test, expect } from "vitest";

function yahtzeeScore(category, dice) {
  if (category === "Chance") {
    return yahtzeeChance(dice);
  }
  if (category === "Ones") {
    return ones(dice);
  }
  if (category === "Twos") {
    return twos(dice);
  }
  if (category === "Threes") {
    return threes(dice);
  }
  if (category === "Fours") {
    return fours(dice);
  }
  if (category === "Fives") {
    return fives(dice);
  }
  if (category === "Sixes") {
    return sixes(dice);
  } else {
    console.log("Something unexpected happened in yahtzeeScore");
  }
}
function yahtzeeChance(dice) {
  var sum = 0;
  for (let i = 0; i < dice.length; i++) {
    sum += dice[i];
  }
  return sum;
}
function ones(dice) {
  var sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 1) {
      sum += dice[i];
    }
  }
  return sum;
}
function twos(dice) {
  var sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 2) {
      sum += dice[i];
    }
  }
  return sum;
}
function threes(dice) {
  var sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 3) {
      sum += dice[i];
    }
  }
  return sum;
}
function fours(dice) {
  var sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 4) {
      sum += dice[i];
    }
  }
  return sum;
}
function fives(dice) {
  var sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 5) {
      sum += dice[i];
    }
  }
  return sum;
}
function sixes(dice) {
  var sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 6) {
      sum += dice[i];
    }
  }
  return sum;
}

test("scoring Chance add all dice", () => {
  expect(yahtzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1 + 2 + 3 + 4 + 5);
});

test("add only values of 1", () => {
  expect(yahtzeeScore("Ones", [1, 1, 1, 4, 5])).toBe(1 + 1 + 1);
});

test("add only values of 2", () => {
  expect(yahtzeeScore("Twos", [1, 2, 1, 2, 5])).toBe(2 + 2);
});

test("add only values of 3", () => {
  expect(yahtzeeScore("Threes", [1, 3, 3, 3, 5])).toBe(3 + 3 + 3);
});

test("add only values of 4", () => {
  expect(yahtzeeScore("Fours", [1, 4, 4, 4, 4])).toBe(4 + 4 + 4 + 4);
});

test("add only values of 5", () => {
  expect(yahtzeeScore("Fives", [5, 1, 1, 4, 5])).toBe(5 + 5);
});

test("add only values of 6", () => {
  expect(yahtzeeScore("Sixes", [1, 6, 6, 6, 1])).toBe(6 + 6 + 6);
});
//How can I find .github/workflows .yml or something to fix the prettier husky on that file...
