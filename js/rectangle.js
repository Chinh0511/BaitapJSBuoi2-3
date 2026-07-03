function rectangleCalc(){

    let l=Number(document.getElementById("length").value);

    let w=Number(document.getElementById("width").value);

    let area=l*w;

    let peri=(l+w)*2;

    document.getElementById("rectangleResult").innerHTML="👉 "+ "Diện tích: " + area + "; " +"Chu vi: " + peri

}