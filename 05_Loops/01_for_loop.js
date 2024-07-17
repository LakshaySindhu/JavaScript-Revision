
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("Element is : ",element);  
//     }
//     console.log(element);   
// }

// console.log(element); // Throws an error because variable element is not defined in this scope


// for (let i = 0; i <=10; i++) {
//     console.log(`Outer Loop Element is : ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`Inner Loop Element is : ${j}`);   
//     }  
// }


// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }  
// }


for (let i = 1; i <= 100; i++) {
    if(i%2==0){
        console.log("Even Detected");
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if(i==5){
        break;
    }
    console.log(i);  
}
