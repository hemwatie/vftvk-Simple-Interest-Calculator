function compute()
{
    //Initalizes variables, and assigns their entered values. 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years *  rate / 100;

    //Calculates new year for expected interest.
    var year = new Date().getFullYear()+parseInt(years);

    //Checks that the principal entered is a positive number.
    if(principal<1)
    {

        document.getElementById("result").innerHTML="Enter a positive number";
    }
    else
    {
    document.getElementById("result").innerHTML=
    "If you deposit <mark>"
    +principal+
    "</mark>,\<br\>at an interest rate of <mark>"
    +rate+
    "%</mark>,\<br\>You will receive an amount of <mark>"
    +interest+
    "</mark>,\<br\>in the year <mark>"
    +year+
    "</mark>,\<br\>";
    }
}

function  updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText  = rateval+" %";
    
}

