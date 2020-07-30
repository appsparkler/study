
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    const isMultipleOf3 = !(i % 3);
    const isMultipleOf5 = !(i % 5);
    const FIZZ = 'Fizz';
    const BUZZ = 'Buzz';
    if (isMultipleOf3 && isMultipleOf5) console.log(`${FIZZ}${BUZZ}`);
    else if (isMultipleOf3) console.log(FIZZ);
    else if (isMultipleOf5) console.log(BUZZ);
    else console.log(i);
  }
};

const consoleLog = console.log;
afterEach(() => {
  console.log = consoleLog; // replace the original to avoid flaky tests
});

const consoleOutputs = [];
const mockedConsoleLog = (log) => consoleOutputs.push(log);
beforeEach(() => {
  console.log = mockedConsoleLog;
});

describe('fizzBuzz method', () => {
  it('correctly print as per requirements', () => {
    fizzBuzz(100);
    const i = 1;
    expect(consoleOutputs[1 - i]).toBe(1);
    expect(consoleOutputs[2 - i]).toBe(2);
    expect(consoleOutputs[3 - i]).toBe('Fizz');
    expect(consoleOutputs[4 - i]).toBe(4);
    expect(consoleOutputs[90 - i]).toBe('FizzBuzz');
    expect(consoleOutputs[5 - i]).toBe('Buzz');
  });
});
