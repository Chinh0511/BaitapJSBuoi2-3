function salaryCalc(){

    let salary = Number(document.getElementById("salaryDay").value);

    let day = Number(document.getElementById("workDay").value);

    let total = salary * day;

    document.getElementById("salaryResult").innerHTML="👉 "+ total.toLocaleString("en-US")
}
