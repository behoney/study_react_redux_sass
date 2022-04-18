interface User {
    name: string;
}
interface Product {
    id: string;
    price: number;
}

interface StoreType { [key: string]: Product }

class Cart {
    // protected user: User;
    private store: StoreType;

    constructor(public user: User) {
        this.user = user;
        this.store = {};
    }

    get(id: string) {
        console.log(this.store);

        return this.user.name;
    }

    put(product: Product) {
        this.store[product.id] = product;
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user.name = "[promo]:" + this.user.name
    }
}


interface Person {
    name: string;
    say(msg: string): void;
}

interface Programmer {
    writeCode(): void;
}

abstract class Korean implements Person, Programmer {
    constructor(public name: string) {
        this.name = name;
    }
    say(msg: string): void {
        console.log(this.name + " said: " + msg);
        this.writeCode();
    }

    writeCode(): void {
        console.error("write this code");
    }

    abstract language(): void;
}

class KoreanProgrammer extends Korean {
    constructor(name: string, private id: number) {
        super(name);
        this.id = id
        this.language();
    }

    language(): void {
        console.log(this.name + " uses JS");
    }

}

const test: KoreanProgrammer = new KoreanProgrammer("joe", 19291929);

export default test;