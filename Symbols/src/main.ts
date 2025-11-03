//// Symbol constructor - creates unique symbol
//// Symbol.for method - creates unique symbol in global scope

// let insertMethod = Symbol.for("insertMethod");
// let s2 = Symbol("insertMethod");
//
// console.log(typeof insertMethod);
//
// if (insertMethod === s2) {
//     console.log("equals");
// } else {
//     console.log("not equals");
// }
//
// function getKey() {
//     return "insertMethod";
// }
//
// let obj = {
//     [getKey()]: function () {
//         console.log("regular insert");
//     },
//     [insertMethod]: function () {
//         console.log("private insert");
//     }
// };
//
// console.log(obj);
//
// obj[getKey()]();
//
// // Symbol.for
//
// let existingSymbol = Symbol.for("insertMethod");
//
// console.log(existingSymbol === insertMethod); // true
//
// obj[insertMethod]();
// obj[existingSymbol]();

//// toString override

type Account = {
    password: string;
    email: string;
    //[Symbol.toStringTag]: string;
}

type AccountWithToString = {
    password: string;
    email: string;
    [Symbol.toStringTag]: string;
}

let obj: AccountWithToString = {
    email: "lizun@gmail.com",
    password: "qwerty",
    get [Symbol.toStringTag](): string {
        return "Account";
    }
};

for (const key in obj)
{
    console.log(key);
}

console.log(Object.prototype.toString.call(obj));

//// yield (function generators)

function* getValues() {
    yield 1;
    yield 2;
    yield 3;
}

console.log(getValues());

class DbContext {
    private _accounts: Account[];

    constructor() {
        this._accounts = [];
    }

    addAccount(account: Account) {
        this._accounts.push(account);
    }

    *[Symbol.iterator]() {
        for (const item of this._accounts) {
            yield item;
        }
    }

    [Symbol.toPrimitive](type: string) {
        switch (type) {
            case "string":
                return "DbContext";
            case "number":
                return this._accounts.length;
        }
    }
}

const dbContext = new DbContext();

dbContext.addAccount({
    email: "mail1@gmail.com",
    password: "ya_natual"
});

dbContext.addAccount({
    email: "mail2@gmail.com",
    password: "ya_ne_natual"
});

dbContext.addAccount({
    email: "mail3@gmail.com",
    password: "ya_mojet_natual"
});

for (const item of dbContext) {
    console.log(item.email);
    console.log(item.password);
    console.log("-------------");
}

const castToNumber = Number(dbContext);
const castToString = String(dbContext);
const castToBoolean = Boolean(dbContext);

console.log(castToNumber);
console.log(castToString);
console.log(castToBoolean);