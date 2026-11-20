import test from "node:test";
import assert from "node:assert/strict";
import { add, subtract } from "./calculator.mjs";

test("두 숫자를 더한다", () => {
  assert.equal(add(3, 5), 8);
});

test("두 숫자를 뺀다", () => {
  assert.equal(subtract(10, 4), 6);
});
