function three(){
    console.log("Inside Three");
}

function two(){
    three();
    console.log("Inside Two");
}

function one(){
    two();
    console.log("Inside One");
}

one();