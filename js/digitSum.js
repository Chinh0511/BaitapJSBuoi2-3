function digitSumCalc(){

    let e = document.getElementById("number").value
      , t = Math.floor(e / 10)
      , n = e % 10;
    let digit=t+n;
    document.getElementById("digitResult").innerHTML = "👉 "+ digit
}