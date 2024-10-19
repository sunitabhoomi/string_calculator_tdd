function add( string_number){ 
   //input value is empty
   if (string_number === "") {
     return 0;
   }
   //parameter value is 1
   else if (string_number.length === 1) {
     return parseInt(string_number);
   }
  
}
add('1')


module.exports = add;