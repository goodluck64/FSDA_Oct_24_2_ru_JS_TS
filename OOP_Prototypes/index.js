// constructor

function SuperAccount() {
    this.credits = 0;
}

SuperAccount.prototype = Object.create(Account.prototype);
SuperAccount.prototype.addCredits = function (credits) {
    this.credits += credits;
};

function Account() {
    this.balance = 0; // this = {}
    // this.deposit = function (amount) {
    //
    //     console.log("Account::Account");
    //
    //     if (amount > 0) {
    //         this.balance += amount;
    //     }
    // };

    return this;
}

Account.prototype.deposit = function (amount) {
    console.log("Account.prototype");
    if (amount > 0) {
        this.balance += amount;
    }
};

// Object.prototype.deposit = function (amount) {
//     console.log("Object.prototype");
//     if (amount > 0) {
//         this.balance += amount;
//     }
// };

// let acc = new Account();
//
// Account.prototype.deposit.call(acc, 100);
//
// console.log(acc);

// let x = {};
//
// Array.prototype.push.call(x, 10);
// Array.prototype.push.call(x, 20);
// Array.prototype.push.call(x, 30);
//
// Array.prototype.pop.call(x);
//
// console.log(x);


//// call & apply
function test(a, b, c) {
    console.log(this);
    console.log(a, b, c);
}

// test.call({}, 10, 20, 30);
// test.apply({}, [10, 20, 30]);
// test.call({}, ...[10, 20, 30]);


let s = new SuperAccount();

s.addCredits(-900);

console.log(s);