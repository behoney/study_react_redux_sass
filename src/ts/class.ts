type HelloFunctionGeneric1 = <T>(msg: T) => T;

const helloFunctionGeneric1: HelloFunctionGeneric1 = <T>(msg: T): T => {
    return msg;
}

interface HelloFunctionGeneric2 {
    <T>(message: T): T
}

const helloFunctionGeneric2: HelloFunctionGeneric2 = <T>(msg: T): T => {
    return msg;
}


class Person<T, K> {
    protected _name: T;
    protected _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;

    }


}

class PersonExtends<T extends string | number> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

interface IPerson {
    name: string;
    age: number;
}

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value
}

const test = () => {

    const person: IPerson = {
        name: "mark",
        age: 19,
    }


    console.log(person, getProp(person, 'name'));
    setProp(person, "name", "123");
    console.log(person, getProp(person, 'name'));

}

export default test;
