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
  test('Should return six when "1\n2,3',()=>{
    expect(string_calculator("1\n2,3")).toBe(6)
  })
  test('Should return 10 when "1\n2,3\n4',()=>{
    expect(string_calculator("1\n2,3\n4")).toBe(10)
  })
  test('Should return 3 when "//;\n1;2',()=>{
    expect(string_calculator("//;\n1;2")).toBe(3)
  })
  test('Should return 10 when "//;\n1;2;3;4',()=>{
    expect(string_calculator("//;\n1;2;3;4")).toBe(10)
  })