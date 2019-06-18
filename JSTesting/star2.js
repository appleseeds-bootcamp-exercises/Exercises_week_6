/// First type:   $ npm install deep-equal
function transpose(array2d) {
  return array2d[0].map((col, i) => array2d.map(row => row[i]));
}

let expect = require("chai").expect;

it("should transpose a 2d matrix", () => {
  const matrix = [[1, 2, 3], [2, 1, 3]];
  const expectedMatrix = [[1, 2], [2, 1], [3, 3]];
  expect(transpose(matrix)).to.deep.equal(expectedMatrix);
});
it("should transpose a 2d matrix", () => {
  const matrix = [[3, 2], [2, 6]];
  const expectedMatrix = [[3, 2], [2, 6]];
  expect(transpose(matrix)).to.deep.equal(expectedMatrix);
});
it("should transpose a 2d matrix", () => {
  const matrix = [[1, 2, 3, 4], [2, 1, 3 ,5]];
  const expectedMatrix = [[1, 2], [2, 1], [3, 3],[4,5]];
  expect(transpose(matrix)).to.deep.equal(expectedMatrix);
});
