
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



const test = () => {
    let isDone: boolean = false;
    isDone = true;
    console.log(typeof isDone);

    let isOk: Boolean = true;
    let isNotOk: object = new Boolean(true);

    console.log(isNotOk);
}


export default test;
