function currencyCalc(){

    const RATE=23500;

    let usd=Number(document.getElementById("usd").value);

    let vnd=usd*RATE;

    document.getElementById("currencyResult").innerHTML= "👉 "+ vnd.toLocaleString("en-US")

}