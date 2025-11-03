// console.log(1);
//
// setTimeout(function (){
//     console.log(2);
// }, 1000);
//
// console.log(3);


// const intervalId = setInterval(() => {
//     console.log(`${Date()}`);
// }, 1000);
//
// console.log(intervalId);
//
// for (let i = 0; i < 100000000; i++) {
//     clearInterval(intervalId);
// }

class User {
    public getData(): Promise<string> {
        return Promise.resolve<string>("User data");
    }

    public async getDataAsync(): Promise<string> {
        return await Promise.resolve<string>("User data");
    }
}

;(async function () {
    const promise = new Promise<string>((resolve, reject) => {

        const rnd = random(0, 2);

        console.log(rnd);

        if (rnd !== 1) {
            setTimeout(() => {
                resolve("Done");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("Error");
            }, 1000);
        }

    });

    try {
        const result = await promise;

        alert(`Success: ${result}`);
    } catch (error: any) {
        alert(`Failure: ${error}`);
    }

    //await Promise.resolve<string>("Promise done");
    //await Promise.reject<string>("Promise failed");

    // Task.WhenAll(); => Promise.all();
    // Task.WhenAny(); => Promise.race();

    // promise.then(x => {
    //     promise2.then(x => {
    //         promise3.then(x => {
    //
    //         })
    //     })
    // })
    // promise.then((data) => {
    //     alert(`Success: ${data}`);
    // }).catch((error) => {
    //     alert(`Failure: ${error}`);
    // });
})();

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Array.prototype.values = Array.prototype.values || function()
// {
//
// };