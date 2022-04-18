
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
    constructor(private localStroageKey: string) {
    }
    add(item: T) {
        window.localStorage.setItem(this.localStroageKey, JSON.stringify(item));
    }
    get(): T | null {
        const data = window.localStorage.getItem(this.localStroageKey)
        return data ? JSON.parse(data) as T : null;
    }
}

const user1: User1 = { name1: 'joe' }
const user: User = { name: 'user1' }
const db = new LocalDB<User>("test");
db.add(user)
const test = () => db.get()


export default test;
