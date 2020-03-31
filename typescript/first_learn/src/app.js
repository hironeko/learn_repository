console.log("Hello! Node.js * TypeScript");
let message = 'TEST';
function add(a, b) {
    return a + b;
}
let str = '検証';
let num = 6789;
console.log(add(str, num));
;
const user = {
    id: 1,
    name: 'test 太郎',
    age: 12
};
console.log(user);
class Test {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    sum() {
        const sum = this.first + this.second;
        return `${this.first} + ${this.second}は、${sum}です。`;
    }
}
const test = new Test(100, 200);
console.log(test.sum());
//# sourceMappingURL=app.js.map