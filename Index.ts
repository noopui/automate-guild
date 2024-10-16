// declare variable use var let const
var color1 = "red";
let color2 = "red";
const color3 = "red";

color1 = "red1";

color2 = "red2";

// color3 = "red3";

// --------------------------------------------------- //

// Basic data in JS
// boolean, true or false
const someBoolean = false;

// number, any number
const someNumber = 1;

// string use '', "" or ``
const someString = "hello";

// object use {} (key and value)
const someObject = {
  name: "tom",
  age: 19,
  status: "someStatus",
  favorites: [],
};

console.log(someObject.name);

// array use []
const someArray = [1, 2, 3, 4, 5];

// --------------------------------------------------- //

// declare type use :
let isActive: boolean;

isActive = false;

let grandTotal: number;

grandTotal = 100;

let couponName: string;

couponName = " Discount 20%   ";

let numbers: number[];

// union types
let price: number;

price = 100;

// enum
enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  INVOICED = "INVOICED",
  COMPLETE = "COMPLETE",
}

let orderStatus: OrderStatus = OrderStatus.PENDING;
orderStatus = OrderStatus.COMPLETE;

// any
let person: any;
person = {};
person = [];
person = 1;

// custom types use keyword interface or type
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

let user: User;

// --------------------------------------------------- //

// แต่ละ type ใช้ยังไงแตกต่างกันอย่างไร
// boolean
// if else
isActive = true;
if (isActive) {
  console.log("The status currently is active");
} else {
  console.log("The status currently is inactive");
}

// number
console.log(price * 300);
price = 101;
if (price > 100) {
  console.log("price is higher than 100");
} else {
  console.log("price is less than 100");
}

// string
console.log("This is message from type string");

// object
user = {
  name: "Jimmy",
  age: 20,
  isActive: true,
};
console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user.isActive);

// array
numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}
console.log(numbers[4]);

// function
// use function keyword
function functionName(argument1, argument2) {
  return argument1 + argument2;
}

console.log(functionName(1, 3));

function setName(name) {
  // set something
}

console.log(setName("test"));

// use arrow function
const arrowFunctionName = (argument1, argument2) => {
  return argument1 + argument2;
};

console.log(arrowFunctionName(1, 3));

type CallbackFunction = (
  value: number,
  index: number,
  array: number[]
) => number;

numbers = [1, 2, 3, 4, 5];
const callbackFunction: CallbackFunction = (number, index) => {
  return number * 2;
};
console.log(numbers.map(callbackFunction));

// anonymous function and use as a callback function
console.log(
  numbers.map((number) => {
    return number * 2;
  })
);

const plusNumber = (num1: number, num2: number): number => {
  return num1 + num2;
};

const test = plusNumber(8, "10");

console.log(test);

// --------------------------------------------------- //

// built in method
console.log(isActive);
console.log(isActive.valueOf());

console.log(grandTotal);
console.log(grandTotal.valueOf());
console.log(grandTotal.toFixed(2));

console.log(couponName);
console.log(couponName.trim());
console.log(couponName.split(""));

console.log(numbers);

// --------------------------------------------------- //
const getTags = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["basic", "javascript", "typescript"]);
    }, 1000);
  });
};

// ที่อยากพูดถึงเพิ่มเติมคือเรื่อง Promise
// async/await function
const getTodoList = async () => {
  const tags = await getTags();

  console.log(tags);
};

getTodoList();