class Account {
    static #createdObjects = 0;

    #_balance;

    constructor() {
        this.#_balance = 0;
        Account.#createdObjects++;
    }

    static getCreatedObjects() {
        return Account.#createdObjects;
    }

    deposit(amount) // Account.prototype.deposit
    {
        this.#_balance += amount;
    }

    getDeposit() {
        return this.#_balance;
    }
}

class SuperAccount extends Account {
    #credits;
    constructor() {
        super(); // base()

        console.log(super.#_balance);
    }

    getDeposit() {
        return this.#credits;
    }
}


let x = new SuperAccount();

x.deposit(100);
console.log(x.getDeposit());


