
const Promise1 = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 1000);
    });
};

const Promise2 = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 2);
        }, 1000);
    });
};

const Promise3 = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 3);
        }, 1000);
    });
};

Promise1(5)
    .then((result1) => {
        return Promise2(result1);
    })
    .then((result2) => {
        return Promise3(result2);
    })
    .then((finalResult) => {
        console.log("Final Value:", finalResult);
    })
    .catch((error) => {
        console.log("Error:", error);
    });