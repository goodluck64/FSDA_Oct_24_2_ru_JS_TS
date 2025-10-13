interface Array<T>
{
    remove(value: T): T | null;
}

Array.prototype.remove = function<T>(value: T): T | null
{
    let index = this.findIndex(x => {
        return x === value;
    });

    if (index != -1)
    {
        let result: T[] = this.splice(index, 1);

        return result[0];
    }

    return null;
};

/// Use classes
class Account
{
    public id: number;

    constructor(id: number) {
        this.id = id;
    }
}

class SuperAccount extends Account
{

}

/// or types

// type AccountType = {
//     id: number;
//     name: string;
//     email: string;
// };
//
// type SuperAccountType =
// {
//     credits: number;
// } & Account;

/*
* {
    id: number;
    name: string;
    email: string;
    credits: number;
};
*/
// let account2: SuperAccountType = {
//     id:42,
//     name: "test",
//     email: "test",
//     credits: 42
// };

enum AccountType
{
    Default = "Default",
    Super = "Super"
}

interface IAccountService<T extends Account>
{
    addAccount(acc: T): void;
    removeAccount(acc: T): T | null;
    getCount(): number;
    getAccounts(): readonly T[];
}

class AccountService<T extends Account> implements IAccountService<T> {
    private readonly _accounts: T[];

    public constructor() {
        this._accounts = [];
    }

    public getAccounts(): readonly T[] {
        return this._accounts;
    }

    [index: number]: number;

    public addAccount(acc: T): void {
        this._accounts.push(acc);
    }

    public getCount(): number {
        return this._accounts.length;
    }

    public removeAccount(acc: T): T | null {
        return this._accounts.remove(acc);
    }
}

let acc1 = new Account(1);
let acc2 = new Account(2);
let acc3 = new Account(3);
let accService: IAccountService<Account> = new AccountService<Account>();

accService.addAccount(acc1);
accService.addAccount(acc2);
accService.addAccount(acc3);
accService.removeAccount(acc2);

for (let account of accService.getAccounts())
{
    console.log(account.id);
}


// Types
// void -> undefined
// any -> any type
// never -> never returns (throw new Error())
// unknown -> ???