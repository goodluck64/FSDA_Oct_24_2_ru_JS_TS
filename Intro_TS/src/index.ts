type Nullable<T> = T | null;
type MyObject = {
    type: Nullable<string>;
    value: Nullable<number>;
};

let value: number = 42;

// value = "42";

function isEven(n: number): boolean {
    return n % 2 === 0;
}

let obj: MyObject = {
    type: "int",
    value: 42,
};

function printObj(obj: MyObject): void {
    console.log(obj.type);
    console.log(obj.value);
}

printObj(obj);
// T is only number
function min<T extends number>(a: T, b: T): T
{
    return a > b ? b : a;
}

min(10, 20);

let array: (number | boolean)[] | boolean = [10, 20, 30, 40, true];

for (let value of array) {

}