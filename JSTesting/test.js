let assert = require('chai').assert;

function add(a,b){
return a * b;
}
it('should return the sum of 2 numbers', function(){
assert.equal(add(1,2), 3 , "sum of 1,2");
});
