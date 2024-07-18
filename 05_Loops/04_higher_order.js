const friends = ["Lakshay","Ray","Shubham","Yusuf","Ayushman","Yuvraj"];


// forEach Higher Order function
// friends.forEach(function(val) {
//     console.log(val);
// })

// using arrow functions 

friends.forEach((val)=> {
    // console.log(val);
})

function printme(item){
    console.log(item);
}
// function ka reference pass krna hai forEach me
// friends.forEach(printme()); // Throws an error

// friends.forEach(printme);

friends.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

const Coding = [
    {
        language: "Javascript",
        extension: "js"
    },
    {
        language: "C++",
        extension: "cpp"
    },
    {
        language: "Python",
        extension: "py"
    },
]

Coding.forEach( (item) => {
    // console.log(`${item.language} : ${item.extension}`);
})