
function createPromise<T>(x: T, timeout: number) {
    return new Promise<T>((res, rej) => {
        setTimeout(() => {
            res(x);
        }, timeout);
    });
}

function createTuple<T, U>(v: T, v2: U): [T, U] {
    if (typeof v === typeof v2) alert("?")
    return [v, v2]
}
interface User {
    name: string
}
interface User1 {
    name1: string
}

class LocalDB<T> {
    constructor(private localStorageKey: string) {
    }
    add(item: T) {
        window.localStorage.setItem(this.localStorageKey, JSON.stringify(item));
    }
    get(): T | null {
        const data = window.localStorage.getItem(this.localStorageKey)
        return data ? JSON.parse(data) as T : null;
    }
}

class DB<T extends (User | string | number)>{
    constructor(public localStorageKey: string) {

    }
    add(item: T): void {
        window.localStorage.setItem(this.localStorageKey, JSON.stringify(item));
    }
    get(): T | null {
        const data = window.localStorage.getItem(this.localStorageKey)
        return data ? JSON.parse(data) as T : null;
    }
}

const user1: User1 = { name1: 'joe' }
const user: User = { name: 'user1' }
const db = new DB<User>("test");
db.add(user)


type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
    return id as PersonID
}

function getPersonById(id: PersonID) { }


interface Person1 {
    name: string,
    age: number
};

interface Person2 {
    name: string,
    age?: number
};

interface Person3 {
    [index: string]: number,
};
function hello3(p: Person3): void {
    console.log(p.name, p.age, p.sisters);

}
// const p31: Person3 = { name: "mark", age: 12, sisters: ["hi"] }

function hello1(p: Person1): void {
    console.log(p.name, p.age);
}
function hello2(p: Person2): void {
    console.log(p.name, p.age);
}


interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'hi',
    age: 41,
    hello: function () {
        console.log(this.name, this.age);
    }
}

interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// class Person implements IPerson1 {
//     constructor(name: string) {
//         this.name = name;
//         this.age = 0
//     }
//     name: string;
//     age?: number | undefined;
//     hello(): void {
//         console.log(this.name, this.age, "hello func from Person");
//     }
// }

interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: string;
}

const k: IKorean = {
    name: "이용재",
    city: "서울",
    age: 100
}

interface HelloPerson {
    (name: string, age?: number): void
}

const helloPerson: HelloPerson = (name: string, age?: number) => {
    console.log(`helloPerson ${name + age?.toString()}`);
}


interface IPerson8 {
    name: string;
    age: number;
    readonly gender: string;
}

const p81: IPerson8 = {
    name: "hi",
    age: 192,
    gender: "male"
}

interface PersonInterface {
    _name: string,
    _id: number,
    toString(): string
}

class Person implements PersonInterface {
    _name: string;
    _id: number;
    private get name(): string {
        console.log("[called] private get name() ");
        return this._name;
    }
    private set name(value: string | string[]) {
        console.log("[called] private set name() ", value);
        if (typeof value === 'string')
            this._name = value;
        else
            this._name = value.join('');
    }
    private get id(): number {
        console.log("[called] private get id() ");
        return this._id;
    }
    private set id(value: number) {
        console.log("[called] private set id() ", value);
        this._id = value;
    }
    constructor(name: string, id: number) {
        this._name = name;
        this._id = id;
    }
    toString(): string {
        return `this person is \`${this._name}\` and id is \`${this._id}\``
    }
    setNull(): void {
        this.name = '';
        this.id = -Infinity;

    }
    // setNew(): void {
    //     this._name = "new name for this"
    // }
}

const test = () => {
    const person1 = new Person("person1", 1)
    console.log(person1.toString());
    // person1.setNew()
    // person1.id = 100;
    // person1.name = `100`;

    person1._id = 0;
    person1._name = `-`;

    // console.log(person1.toString(), person1.name, person1.id);
    person1.setNull();
    console.log(person1.toString());
}

type PersonList = string[];
interface IPersonList {
    [index: number]: string;
}

type person__ = IPerson1 & IPerson2;


export default test;
