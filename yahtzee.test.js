import  { test, expect } from "vitest";

test("scoring Chance add all dice", () =>{
   expect(yahtzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1+2+3+4+5);
});