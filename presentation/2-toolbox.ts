export {};

interface Strategy {
  (char: string, index: number, characters: string[]): string;
}
const mapToLowercase = (
  input: string,
  strategy: Strategy,
): string =>
  input
    .split("")
    .map(strategy)
    .join("");

const simpleStrategy: Strategy = () => {
  return "a";
};

console.log(mapToLowercase("Hello", simpleStrategy));
