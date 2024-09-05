const mathOperations = require("./calculate");

describe("Math operations test suite", () => {
  // sum function
  it("should return the correct sum of two numbers", () => {
    const result = mathOperations.sum(2, 3);
    expect(result).toBe(5);
  });

  // failing test (result doesnt match actual result)
  it("should fail when expected result is incorrect", () => {
    const result = mathOperations.sum(2, 3);
    expect(result).toBe(6);
  });

  // test subtract function
  it("should return the correct difference of two numbers", () => {
    const result = mathOperations.subtract(5, 2);
    expect(result).toBe(3);
  });

  // test multiply function
  it("should return the correct product of two numbers", () => {
    const result = mathOperations.multiply(3, 4);
    expect(result).toBe(12);
  });
});
