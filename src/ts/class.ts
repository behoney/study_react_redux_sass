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

const test = () => {
    console.log(
        helloString("a"),
        helloNumber(1),
        helloGeneric(1),
        genericCompare(1, '1'),
        genericCompare(1, 2222),
        genericCompare(1, {}),
        genericCompare(1, Infinity),
        genericCompare(NaN, '1')
    );


}

export default test;
