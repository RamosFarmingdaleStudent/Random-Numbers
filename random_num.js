//var ramdomBetween = Math.floor(Math.random() * 100);

//function ranNum(){
    //return Math.floor(Math.random() * 50);
//}

//console.log(ranNum());

function ranRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myRandom = ranRange(1, 20);

console.log(myRandom);