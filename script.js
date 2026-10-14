// 1. Cinema Ticket Price — Easy

let age=0;
let price;
if(age<0){
    console.log("invalid")
} else if(age<12){
    price=50;
} else if(age<60){
    price=100;
} else{
    price=70;
}
// switch
let day="friday";
let age=10;
let price;
switch(day){
    case"friday":
    case"saturday":
    price=price+20;
    console.log(${price});
    break;
    default:
}

// 2. Multiplication Table — Easy

for(let i=1; i<=10; i++){
    console.log(number*i);
}
if(number%2===0){
    console.log("The number is even")
} else{
    console.log("The number is odd")
}

// 3. Savings Goal Tracker — Hard

let targetAmount=200;
let dailySavings=30;
let inCreaseEvery=2;
if(targetAmount<=0 || dailySavings<=0 || inCreaseEvery<=0){
    console.log("invalid input")
} else{
    let total=0;
    let day=0;
    while(total<targetAmount){
        day++;
        total+=dailySavings;
        console.log(`${day}, ${dailySavings}, ${total}`);
    }
    if(day%inCreaseEvery===0){
        dailySavings+=10;
        console.log('The goal was reached in days')
    }

}