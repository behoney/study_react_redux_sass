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

const test: PromotionCart = new PromotionCart({ name: "joe" });

export default test;