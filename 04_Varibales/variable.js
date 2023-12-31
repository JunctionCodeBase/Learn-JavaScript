// let a = 10;
// document.getElementById("result").innerHTML = a;

// changing the value of a is not possible using let;
// let a = 30;



// var b = 20;

// document.getElementById("var").innerHTML = b;
// chaging the value of var is possible in javascript.
// var b = 20;
// document.getElementById("var").innerHTML = b;


// const c = 30;

// document.getElementById("const").innerHTML = c;


function varibale() {
    var c; // hositing 
    console.log(c); // undefiend because you are printing the c value it own give you error because var is hosited
    let a = 10; // this block variable which can be accessed inside the block scope only
    const b = 20;
    console.log(a);
    console.log(b);

    c = 20;

}

varibale(); // calling function
// console.log(a); // when we try to access block scope variable outside the block get an error undefiend.
// console.log(b)


