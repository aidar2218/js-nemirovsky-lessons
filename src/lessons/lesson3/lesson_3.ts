console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let prom = new Promise((resolve, reject) => {
//     setTimeout(response => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//             console.log("2", prom);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {
//         httpStatus: 200,
//         data: {
//             userName: "Yo",
//             id: "sdfg234dfgj243234",
//             status: "active"
//         },
//         error: {},
//     });
// });
//
// prom
//     .then(
//         res => {
//             console.log("res", res);
//         },
//         () => {
//         }
//     )
//     .then(res2 => {
//         console.log("res2", res2);
//     });
//
// console.log("1 ", prom);


// just a plug
export default () => {
};