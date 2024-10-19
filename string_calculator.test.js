const string_calculator = require("./string_calculator");

test("should return zero when '' is passed", () => {
  expect(string_calculator("")).toBe(0);
});
test('should return one when "1" is passed', () => {
    expect(string_calculator("1")).toBe(1);
  });
  test('should return three when "1,2" is passed', () => {
    expect(string_calculator("1,2")).toBe(3);
  });
  test('should return six when "1,2,3" is passed', () => {
    expect(string_calculator("1,2,3")).toBe(6);
  });
