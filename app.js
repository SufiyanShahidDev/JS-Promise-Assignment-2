
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

// const Promise3 = (value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value + 3);
//         }, 1000);
//     });
// };