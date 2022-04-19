
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



const test = () => {
    // p41.hello();
    // hello3({ name: "joe" })
    // hello3(p31)
    // console.log(getPersonById('123123'));
    // console.log(PersonID('123123'));
}




export default test;
