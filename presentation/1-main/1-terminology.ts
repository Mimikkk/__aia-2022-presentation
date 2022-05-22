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

// - struktura
let user = { name:"John" };
// - klasa
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
// - interfejs
interface IUser {
  name: string;
}
// - generyczność
interface Extension<T> {
  value: T;
}
// - dziedziczenie
class User2<T> extends User {
  value: T;
  constructor(name: string, value: T) {
    super(name);
    this.value = value;
  }
}
interface IUserWithGeneric<T> extends IUser, Extension<T> {}

// - polimorfizm
interface IUserWithNumber extends IUser, Extension<number> {}

const logextension = <T>(user: Extension<T>) => {
  console.log(user.value);
};
const logname = (user: IUser) => {
  console.log(user.name);
};
const userWithNumber: IUserWithNumber = { value:1, name:"John" };
const userWithObject: IUserWithGeneric<object> = { value:{}, name:"John" };

logname(userWithNumber);
logname(userWithObject);
logextension(userWithNumber);
logextension(userWithObject);

// - kompozycja
const addExtension = <T>(user: IUser, value: T): IUser & Extension<T> => ({
  ...user,
  value,
});

// - kowariancja
const usersWithMaybeExtensions: (IUser | IUserWithGeneric<any>)[] =
  [userWithNumber, userWithObject, user];

// - SOLID ( co znaczy 5 rzeczy ):
//     - SRP ( single responsibility principle ) - Funkcja.
let printseven = () => console.log(7);
printseven();
//     - OCP ( open-closed principle )
const printvalue = (value: number) => console.log(value);
printseven = () => printvalue(7);
//     - LSP ( Liskov substitution principle )
const returnvalue = (value: number) => value;
let returnseven = () => 7;
returnseven = () => {
  const value = returnvalue(7);
  console.log(value);
  return value;
};
//     - ISP ( interface segregation principle )
interface IUserWithName {
  name: string;
}
//     - DIP ( dependency inversion principle )
// - Wzorce projektowe:
//     - Obserwator - funkcja która jest wywoływana w momencie zmiany stanu obiektu.
//     - Mediator - funkcja podczas przesyłania danych do obiektu.
//     - Adapter - funkcja która zmienia dane w obiekcie. ( czyli po prostu funkcja)
//     - Dekorator - funkcja która dodaje funkcjonalność do funkcji/obiektu.
//     - Proxy - funkcja która zmienia dane w obiekcie i informuje nas o tym.
//     - Fasada - uproszczenie obiektu/funkcji dla użytkownika.
//     - Komenda - funkcja która wykonuje operacje na obiekcie.
//     - ...
