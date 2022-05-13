export {};

function fn() {
  return "Hello World";
}

console.log(fn());

interface IFunction<I = undefined, O = void> {
  (args: I): O;
}

const arrow_fn: IFunction = (args) => {};

const b = 4;
