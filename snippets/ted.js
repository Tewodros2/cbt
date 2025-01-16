

// const sum = (arr) => {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0) {
//             total += arr[i];
//         }
//     }
//     return total;
// }
// const ar = [1, 2, 3, 4, 5, 6, 7];
// console.log(sum(ar));


const selectUnic = (arr) => {
    let unic = [];
    for (let i = 0; i < arr.length; i++) {
        let isUnic = false;
        for (let j = 0; j < unic.length; j++) {
            if (arr[i] === unic[j]) {
                isUnic = true;
                break;
                
            }
        }
            if (!isUnic) {
                unic.push(arr[i])
            }
            // else {
            //     unic.push(null)
            // }
        }
       // if (!unic.includes(arr[i])) {
         //   unic.push(arr[i])
        // }
        
        
    
    return unic;
}
const ar = [1, 4, 3, 4, 5,5, 6, 7];
console.log(selectUnic(ar));
