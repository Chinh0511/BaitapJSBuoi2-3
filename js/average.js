function averageCalc(){

    let arr=[];

    for(let i=1;i<=5;i++){

        arr.push(Number(document.getElementById("n"+i).value));

    }

    let avg=arr.reduce((a,b)=>a+b,0);

    document.getElementById("averageResult").innerHTML= "👉 "+ avg

}