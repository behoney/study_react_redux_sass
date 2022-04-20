class Student {
    [index: string]: string;
    public static CITY: string = "seoul";

    static hello(): void {
        console.log("hello there from Student", Student.CITY);
    };
    static change(): void {
        console.log(Student.CITY);
    }
}

const test = async () => {
    const a = new Student();
    a.mark = "male"
    a.jade = "male"
    console.log(a)

    const b = new Student();
    b.chole = 'female'
    b.alex = 'male'
    b.anna = 'female'
    console.log(b);

    Student.hello();

    console.log(Student.CITY, b.CITY);
    Student.CITY = "100";

    console.log(Student.CITY, b.CITY);


}

export default test;
