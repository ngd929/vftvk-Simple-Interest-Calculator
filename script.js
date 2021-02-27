function compute()
{
    // Get input values
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    // Ensure principal amount is a positive number
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    let interest = principal * years * rate / 100;
    let yearFromNow = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal.toString() + 
    "</mark>,<br>at an interest rate of <mark>" + rate.toString() +
    "</mark>%.<br>You will receive an amount of <mark>" + interest.toString() +
    "</mark>,<br>in the year <mark>" + yearFromNow.toString()+"</mark>";    
}

function detectChange(value) {
    document.getElementById("output").value = value + ' %';
}
        