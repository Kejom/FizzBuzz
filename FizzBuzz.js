for (let i = 0; i <= 100; i++) {
    FizzBuzz(i);  
}


function FizzBuzz(number){
    var result = "";

    try{
        let fizz = ["fizz"][number % 3].toString();
        result += fizz;
    }
    catch{}

    try{
        let buzz = ["buzz"][number % 5].toString();
        result += buzz;
    }
    catch{}

    try{
        let num = [number][result.length].toString();
        result = num;
    }
    catch{}

    console.log(result);
}