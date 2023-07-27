/*const func = (str: number): number | string => {
    console.log('hello')
    return 4
}

interface IUser<T> {
    name: string;
    age: number;
    data: T
}

const user1: IUser<number[]> = {name: 'Ihor', age: 5, data: [2, 4, 1]};
const user2: IUser<string> = {name: 'Ihor', age: 5, data: 'some info'};

const user3: Partial<IUser<string>> = {name: 'Ihor'};*/
/*
class User {
    /!*
        public id: number;
        public name: string;
        public age: number;
    *!/

    constructor(private id: number, public name: string, private age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }
}

const user = new User(1, 'MAx', 13)

console.log(user.getName())*/
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
        /*/this прописывается автоматически /*/
    }
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return (this.a * this.b) * 2;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        /*/this прописывается автоматически /*/
    }
    Triangle.prototype.area = function () {
        return this.a * this.b / this.c;
    };
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    return Triangle;
}());
var shapes = [
    new Triangle(1, 2, 3),
    new Rectangle(3, 6),
    new Triangle(1, 5, 3)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.area());
    console.log(shape.perimeter());
}
