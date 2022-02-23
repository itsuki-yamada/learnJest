const fizzBuzz = require('./fizzBuzz');

describe('数値を文字列に変換する', () => {
  it('1を渡すと文字列"1"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(1)).toBe('1');
  })
  
  it('2を渡すと文字列"2"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(2)).toBe('2');
  })
});

describe('3の倍数を渡すと「Fizz」を返す',() => {
  it('3を渡すと文字列"Fizz"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(3)).toBe('Fizz');
  })
  it('9を渡すと文字列"Fizz"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(9)).toBe('Fizz');
  })
});

describe('5の倍数を渡すと「Buzz」を返す',() => {
  it('5を渡すと文字列"Buzz"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(5)).toBe('Buzz');
  })
  it('20を渡すと文字列"Buzz"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(20)).toBe('Buzz');
  })
});

describe('15の倍数を渡すと「FizzBuzz」を返す',() => {
  it('15を渡すと文字列"FizzBuzz"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })
  it('30を渡すと文字列"FizzBuzz"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  })
});
