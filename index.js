const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Code your solution here

// function getTotal(array){
//     for(element of array){
//         totalBatteries += element;
//     }
// return totalBatteries;
// }

const totalBatteries = batteryBatches.reduce(function(addBatteries, battery){
    let sum = addBatteries +=battery;
    console.log(`Your total sum is: ${sum}.`);
    return sum;
});

totalBatteries;