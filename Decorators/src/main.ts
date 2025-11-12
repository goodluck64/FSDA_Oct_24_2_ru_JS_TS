// function main();


/// Function Expression
// let func = function()
// {
//
//
//     return function () {
//         console.log(arguments);
//     };
// };
//
// let fn1 = func(); //fn1 =  function () { console.log(arguments); };

// fn1();


/// Closures & Memoization

// let getCounter = function (counterName: string){
//     let counter = 0;
//
//     return function (obj: object)
//     {
//         console.log(obj);
//         console.log(`${counterName}: ${counter++}`);
//     };
// };
//
//
// function getLoader()
// {
//     const cache = new Map<string, Int8Array>();
//
//     return function loadVideo(url: string) : Int8Array
//     {
//         if (cache.has(url))
//         {
//             return cache.get(url)!;
//         }
//
//         // load
//
//         return new Int8Array(42);
//     };
//
// }
//
//
// let counter = getCounter("Counter1");
// let counter2 = getCounter("Counter2");
// // let counter3 = getCounter();
//
// for (let i = 0; i < 10; i++) {
//     counter({});
// }
//
// for (let i = 0; i < 5; i++) {
//     counter2({});
// }

//
// function func(this: any) {
//     console.log(this);
// }
//
// func();


/// call bind apply
// function func(this: any, n: number, n2: number, ...rest: any[]) {
//     console.log(rest);
//     console.log(this);
//     console.log(n + n2);
// }
//
// // func.call({}, ...[42, 69]);
// // func.apply({}, [42, 69]);
//
// const boundFunction = func.bind({
//     test: 69
// }, 42);
//
// boundFunction(13); // 42 + 13
// boundFunction(2); // 42 + 2
//
//
// // function func(this: any, n2: number, ...rest: any[])
//
// function logDecorator(func: (...args: any[]) => any) {
//     return function (...args: any[]): any { // <--- decorator
//         console.log("function called");
//
//         return func(...args);
//     };
// }
//
//
// function sum(a: number, b: number) {
//     return a + b;
// }
//
// const decoratedFunction = logDecorator(logDecorator(sum));
//
// decoratedFunction(42, 13);


function classDecorator(constructor: Function) {
    console.log("constructor function");
}

function classExtensions<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        validate(): boolean {
            return true;
        }
    };
}

function methodDecorator<T>(type: object, prop: string, descriptor: TypedPropertyDescriptor<T>) {
    console.log("onetime method decorator");

    return descriptor;
}

function validatorFactoryDecorator(minAge: number) {
    return function <T>(type: object, prop: string, descriptor: TypedPropertyDescriptor<T>) {
        const originalMethod = descriptor.value as Function; // originalMethod = User.prototype.getAge

        descriptor.value = function (this: any, ...args: any[]) {
            const resultAge: number = originalMethod.apply(this, arguments);

            if (resultAge < minAge) {
                throw new Error("Age is less than " + minAge);
            }

            return resultAge;
        } as any;

        return descriptor;
    };
}

function namePropertyDecorator<T>(type: object, prop: string, descriptor: TypedPropertyDescriptor<T>) {
    const originalSetter = descriptor.set as Function;

    descriptor.set = function (this: any, ...args: any[]) {
        const value = args[0];

        if (value === undefined || value === "" || value === null) {
            throw new Error("Value is malformed");
        }

        originalSetter.call(this, value);
        //originalSetter.apply(this, arguments);

    } as any;

    return descriptor;
}

@classDecorator
class User {

    private readonly _age: number;
    private _name: string;


    constructor(age: number, name: string) { // function User() {}
        console.log("constructor");

        this._age = age;
        this._name = name;
    }

    @methodDecorator
    print(): void {
        console.log(`Age: ${this._age}`);
    }

    @validatorFactoryDecorator(16)
    getAge(): number {
        return this._age;
    }

    @namePropertyDecorator
    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

let user1 = new User(42, "baban");
let user2 = new User(9, "test");

user1.name = "Alex";
user1.print();
user2.print();

console.log(user1.getAge());
console.log(user2.getAge());
