const string_calculator = require("./string_calculator");

test("should return zero when '' is passed", () => {
  expect(string_calculator("")).toBe(0);
});
