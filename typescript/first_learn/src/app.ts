console.log("Hello! Node.js * TypeScript");
let message: String = 'TEST';

function add(a: string, b: number ): string {
  return a + b;
}

let str: string = '検証';
let num: number = 6789;

console.log(add(str, num));

type sumStr = {
  x: string;
  y: number;
 }

//let test: sumStr = {
//  x: 'test',
//  y: 1988
//}

//console.log(test)

interface User {
  id: number,
  name: string,
  age: number
};

const user: User = {
  id: 1,
  name: 'test 太郎',
  age: 12
};

console.log(user);





class Test {
  private first: number;
  private second: number;

  constructor (first: number, second: number) {
    this.first = first;
	this.second = second;
  }

  public sum(): string {
    const sum: number = this.first + this.second;
	return `${this.first} + ${this.second}は、${sum}です。`;
  }
}


const test = new Test(100, 200);

console.log(test.sum())







