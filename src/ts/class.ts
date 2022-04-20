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

const test = () => {
    const person = new PersonExtends("mark")
    const person1 = new PersonExtends(1)
    const person2 = new PersonExtends(false)

}

export default test;
