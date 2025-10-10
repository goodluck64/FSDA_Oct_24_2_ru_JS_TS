let arr = []; // Array
// let emptyArr = Array(42);

// if (Array.isArray(arr))
// {
//     console.log("it's an array");
// }

// console.log(typeof emptyArr[0])

// console.log(Array())

// push
arr.push(42);
arr.push(13);
arr.push(8);
arr.push(9);
arr.push(10);
arr.push(11);
arr.push(12);
arr.push(14);
arr.push(123);
arr.push(987);

// pop
// arr.pop();

// splice
// let deleted = arr.splice(0, 3);
// console.log(arr);
// console.log(deleted);

// unshift & shift
// arr.shift()
// arr.unshift(69);

// map
// let mapped = arr.map((n) => {
//     return (n * 2).toString();
// });
//
// console.log(mapped);

// contains
// if (arr.includes(8))
// {
//     console.log("contains");
// }


// indexOf
// arr.indexOf()

// keys
// for (let key of arr.keys())
// {
//     console.log(key);
// }

// values
// for (let value of arr.values())
// {
//     console.log(value);
// }

// entries
// for (let entry of arr.entries())
// {
//     console.log(`Key: ${entry[0]}`);
//     console.log(`Value: ${entry[1]}`);
// }

// split & join
// let splitArr = "10-20-30-40".split("-");
// splitArr = splitArr.map(n => Number(n));
//let result = arr.join("-")

// console.log(splitArr);


// arr.sort();
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//
// }


// foo()
//
// function foo(n)
// {
//     // if (arguments.length != 1)
//     // {
//     //     return;
//     // }
//
//     const t = typeof n;
//
//     if (t === "number")
//     {
//         // ...
//     }
//     else if (t === "string")
//     {
//         // ...
//     }
// }

// arr.test = 42;
//
// for (let value of arr) {
//     console.log(value);
// }

// let [a, b, c, ...rest] = [10, 20, 30, 40, 50, 60, ...arr];
//
//
// console.log(...rest); //

// string

// let x = "Hello JavaScript";
//
// x[0] = 'h';
//
// let newStr = x.slice(6, 16);
//
// console.log(newStr);
//
// let str = "Test|";
// let str2 = "Test2|";
//
// console.log(str.padStart(8));
// console.log(str2.padStart(8));


// typeof obj == "object";
// let obj = {
//     value: 42,
//     get_value()
//     {
//         return this.value;
//     },
//     get_value: function ()
//     {
//         return this.valuefdbiudfhiolkdfj;
//     }
// };

// console.log(obj.get_value())

// Object

// IIFE (Immediately Invoked Function Expression)
let obj = (function () {
    let obj = {};
    let _age;

    Object.defineProperty(obj, "age", {
        configurable: false,
        enumerable: true,
        get() {
            return _age;
        },
        set(value) {
            if (value < 0) {
                return;
            }

            _age = value;
        }
    });

    return obj;
})();

obj.age = 42;
console.log(obj.age);

let testObj = {
    [getKey()]: 42,
    myKey: "value",
    "1k1-k2": "strange value",
    0: "first",
    1: "second",
};

console.log(testObj["1k1-k2"])

function getKey()
{
    return `${123}key`;
}

// let arr2 = [10, 20, 30, 40];
// let t = Object.prototype.constructor.call(arr2);
//
// console.log(t);


