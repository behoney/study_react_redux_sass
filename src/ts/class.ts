abstract class AbsPerson {
    protected _name: string = "mark";

    abstract setName(name: string): void;

}
class Person extends AbsPerson {
    setName(name: string): void {
        this._name = name;
    }

}
const test = () => {

    const a = new Person();
    console.log(a);
    a.setName("hi");
    console.log(a);
    
}

export default test;
