
class ClassName {
    private static instance: ClassName | null = null
    public static getInstance(): ClassName {
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    private constructor() {

    }
}

const test = async () => {

    const a = ClassName.getInstance();
    const b = ClassName.getInstance();

    console.log(a === b);


}

export default test;
