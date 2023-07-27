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
/*

interface iShapeActions {
    area: () => number
    perimeter: () => number
}

class Rectangle implements iShapeActions {
    constructor(private a: number, private b: number) {
        /!*!/this прописывается автоматически /!*!/
    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return (this.a * this.b) * 2;
    }

}

class Triangle implements iShapeActions {
    constructor(private a: number, private b: number, private c: number) {
        /!*!/this прописывается автоматически /!*!/
    }


    area(): number {
        return this.a * this.b / this.c;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

}

const shapes: iShapeActions[] = [
    new Triangle(1, 2, 3),
    new Rectangle(3, 6),
    new Triangle(1, 5, 3)
];

for (let shape of shapes) {
    console.log(shape.area())
    console.log(shape.perimeter())
}

type MyNumber = number | string

const diffNumber: MyNumber = '9';

const asd = () => {
    return 19
}

type MyFuncType = ReturnType<typeof asd>

const g: MyFuncType = 3; //проверка что возвращается число с функции
*/
import {userService} from "./services/user.service";

userService.getAll().then(value => value.data)
    .then(users => {
        for (let user of users) {
            console.log(user.email)
        }

    })
