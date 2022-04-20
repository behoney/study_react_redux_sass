class Parent {
    constructor(protected _name: string, private _age: number) {

    }
    public print(): void {
        console.log(this._name, this._age);

    }

    protected printName(): void {
        console.log(this._name, this._age);
    }
}

class Child extends Parent {


    public gender: string = "male";

    constructor(age: number) {
        super("child name", age);
        this.printName();
    }

    print() {
        super.print();
        console.log(this.gender);

    }

}


const test = () => {
    const parent = new Parent("p", 1);
    parent.print();

    const c = new Child(2);
    c.print();



}

export default test;
