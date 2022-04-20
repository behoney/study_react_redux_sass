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
const test = () => {
    const person = new Person<string, number>("hi", 1);
    console.log(person);


}

export default test;
