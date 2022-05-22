export {};

function fn() {
  //@ts-expect-error
  console.log(this);
  return "Hello World";
}

console.log(fn());

interface IFunction<I = undefined, O = void> {
  (args: I): O;
}

const arrow_fn: IFunction = (args) => {
  console.log(args);
};

//@ts-expect-error
arrow_fn();
