function add(string_number) {
  //input is -ve
  if (string_number.includes("-")) {
    let delimiters = "\n|,|;";
    string_number.split(new RegExp("(" + delimiters + ")"));
    var negativeValues = string_number
      .split(",")
      .filter((value) => parseInt(value) < 0);
    if (negativeValues.length > 0) {
      console.error("Negative numbers not allowed", negativeValues.join(","));
      // throw 'Negative numbers not allowed' + negativeValues.join(',');
    }
  }
  //input value is empty
  if (string_number === "") {
    return 0;
  }
  //parameter value is 1
  else if (string_number.length === 1) {
    return parseInt(string_number);
  } else {
    //input value with delimiter
    if (string_number.indexOf("//") === 0) {
      let delimiters = "\n|,|;";
      if (string_number.indexOf("//") === 0) {
        delimiters += string_number.substring(2, string_number.indexOf("\n"));
        string_number = string_number
          .substring(string_number.indexOf("\n"))
          .replace(/(;)/gm, ",");
        console.log(string_number);
      }
    }
    //input value with new line
    else {
      string_number = string_number.replace(/(\r\n|\n|\r)/gm, ",");
    }
    let result = string_number.split(",");
    let total = 0;
    for (let i = 0; i < result.length; i++) {
      total = total + parseInt(result[i]);
    }
    return total;
  }
}
add("1,2");

module.exports = add;
