import { getResultAdd } from "./testCalculator";
import { getResultSub } from "./testCalculator";
import { getResultMult } from "./testCalculator";
import { getResultDiv } from "./testCalculator";
import { describe, test, expect } from "vitest";

describe("Should be ok", () => {
  test("Test", () => {
    expect(getResultAdd()).toStrictEqual(true);
  });
});
describe("Should be ok", () => {
  test("Test", () => {
    expect(getResultSub()).toStrictEqual(true);
  });
});
describe("Should be ok", () => {
  test("Test", () => {
    expect(getResultMult()).toStrictEqual(true);
  });
});
describe("Should be ok", () => {
  test("Test", () => {
    expect(getResultDiv()).toStrictEqual(true);
  });
});

