// - [x] 数値を文字列に変換する
//   - [x] 1を渡すと文字列'1'に変換する->仮実装
//   - [x] 2を渡すと文字列'2'に変換する->三角測量
// - [x] 3の倍数を渡すと「Fizz」を返す
//   - [x] 3を渡すと「Fizz」を返す
// - [x] 5の倍数を渡すと「Buzz」を返す
//   - [x] 5を渡すと文字列「Buzz」を返す
// - [x] 3と5両方の倍数を返すと「FizzBuzz」を返す
//   - [x] 15を渡すと文字列「FizzBuzz」を返す

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  }else if (num % 3 === 0) {
    return 'Fizz';
  }else if (num % 5 === 0) {
    return 'Buzz';
  }
  return num.toString();
}
 
module.exports = fizzBuzz;
