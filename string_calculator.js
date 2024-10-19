function add( string_number){ 
   //input value is empty
   if (string_number === "") {
     return 0;
   }
   //parameter value is 1
   else if (string_number.length === 1) {
     return parseInt(string_number);
   }
   else {
    //parameter value is "1,2"
    string_number = string_number.replace(/(\r\n|\n|\r)/gm, ',');
    let result = string_number.split(',');
    let total = 0;
    for(let i = 0 ; i < result.length ; i++){
        total = total + parseInt(result[i]);
    }
    return total;
   }
  
}
add('1,2')


module.exports = add;