function helloString(msg: string) {
    return msg;
}

function helloNumber(msg: number) {
    return msg;
}

function helloGeneric<T>(msg: T) {
    return msg;
}

function genericCompare<T, U>(a: T, b: U): boolean {
    return typeof a === typeof b
}

function helloBasic<T, U>(msg: T, cmt: U) {
    return msg
}

function helloArray<T>(message: T[]): T {
    return message[0];
}

function helloTuple<T, K>(message: [T, K]): T {
    return message[0]
}

const test = () => {

    console.log(helloArray([1, 2, 3, 4, 12, 1]));
    console.log(helloArray<number[]>([[12], [12]]));

    console.log(helloTuple([[1212333], [12]]));


}

export default test;
