const string_calculator = require("./string_calculator");

test("should return zero when '' is passed", () => {
  expect(string_calculator("")).toBe(0);
});
test('should return one when "1" is passed', () => {
    expect(string_calculator("1")).toBe(1);
  });
