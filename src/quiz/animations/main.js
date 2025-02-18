var aliceTumbling1 = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
var aliceTiming1 = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};
var alice10 = document.querySelector("#alice1");
var alice20 = document.querySelector("#alice2");
var alice30 = document.querySelector("#alice3");
if (alice10 && alice20 && alice30) {
    // Promise chain  
    alice10.animate(aliceTumbling1, aliceTiming1).finished
        .then(function () {
        return alice20
            .animate(aliceTumbling1, aliceTiming1)
            .finished;
    })
        .then(function () {
        return alice30
            .animate(aliceTumbling1, aliceTiming1)
            .finished;
    })
        .catch(function (err) { return alert("Error when promising ... ".concat(err.message)); });
}
else {
    console.warn("#alice not found");
}
// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
