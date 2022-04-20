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

const test = () => {
    console.log(

        helloFunctionGeneric1(1)
    );
}

export default test;
