class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}


const test = () => {
    const person = new Person("Mark");
    console.log(person)


}

export default test;
