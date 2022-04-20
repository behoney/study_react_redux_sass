
class ClassName {
    private static instance: ClassName | null = null
    public static getInstance(): ClassName {
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }

    _sum: number = 0;
    add() {
        this._sum++;
    }
    get sum() {
        return this._sum
    }

    private constructor() {

    }
}

const test = async () => {

    const a = ClassName.getInstance();
    const b = ClassName.getInstance();

    console.log(a === b);
    a.add();
    b.add();
    console.log(a.sum);
    a.add();
    b.add();
    console.log(b.sum);


}

export default test;
