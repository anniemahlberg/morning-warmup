function rotate(arr) {
  let end = arr.shift();
  arr.push((end));
  return arr;
}

// do not touch this export
module.exports = rotate;
