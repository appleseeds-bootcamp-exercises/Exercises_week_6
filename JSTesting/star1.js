function isPalindrome(string) {
  for (let index = 0; index < string.length / 2; index++) {
    if (string.charAt(index) !== string.charAt(string.length - 1 - index)) {
      return false;
    }
  }
  return true;
}
let expect = require("chai").expect;

it("Should check whether a string is a palindrome", function() {
  expect(isPalindrome("saas")).to.equal(true);
});
it("Should check whether a string is a palindrome", function() {
  expect(isPalindrome("su1221us")).to.equal(true);
});
it("Should check whether a string is a palindrome", function() {
  expect(isPalindrome("sadasdsas")).to.equal(true);
});
it("Should check whether a string is a palindrome", function() {
  expect(isPalindrome("")).to.equal(true);
});
