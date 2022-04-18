
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

// const test = () => createPromise("hello", 500).then((x) => console.log(x));
const test = () => createTuple("1", "2")


export default test;
