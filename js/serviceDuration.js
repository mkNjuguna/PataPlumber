//Initialize time values
let seconds = 0;
let minutes = 0;
let hours = 2;

//Init display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
//Stopwatch status
let status = "stopped";

//Stopwatch functionality
function stopWatch(){
    seconds++;
    //Increment seconds to minutes
    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    //Adding a leading 0 to the values
    if (seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }


    //Display updated time values
    document.getElementById("stopwatch-display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function startStopService(){
    if (status === "stopped"){
        //Start stopwatch
        interval = window.setInterval(stopWatch, 1000); //Default timeout is 1000
        document.getElementById("start-stop-service-timer-btn").innerHTML = "STOP SERVICE";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("start-stop-service-timer-btn").innerHTML = "START SERVICE";
        status = "stopped";
    }
}

function resetStopWatch(){
    window.clearInterval(interval);

    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("stopwatch-display").innerHTML = "00:00:00";
    document.getElementById("start-stop-service-timer-btn").innerHTML = "START SERVICE";

}




// Initialization
let duration = 0;
let totalCost = 0;
const leakageRate = 500;
const plumbingInstallationRate = 600;
const damagedInstallationsRate = 700;
const unblockingCloggedRate = 200;
const faultyWaterHeaterRate = 200;
const washingMachineInstallationRate = 800;
const database = firebase.database();

let customerNumber = document.getElementById("customer-number-search");


function calculateCost(){

    if (customerNumber.value === ""){
        alert("Cannot calculate bill without phone number")
        return false;
    } else {
        console.log('CalculateCost Button Clicked');
        //Get values from DB
        database.ref('/jobs/' + customerNumber.value).once('value').then(function (dataSnapshot) {
            let customerTitle = dataSnapshot.val().customer_title;
            let customerFirstName = dataSnapshot.val().customer_fname;
            let customerSecondName = dataSnapshot.val().customer_sname;
            let customerPhoneNumber = dataSnapshot.val().customer_phonenumber;
            let customerServiceRequested = dataSnapshot.val().customer_service_requested;
            let customerTotalBill = dataSnapshot.val().customer_totalBill;

            document.getElementById("customer-title-output").innerHTML = customerTitle;
            document.getElementById("customer-firstname-output").innerHTML = customerFirstName;
            document.getElementById("customer-secondname-output").innerHTML = customerSecondName;
            document.getElementById("customer-phonenumber-output").innerHTML = customerPhoneNumber;
            document.getElementById("customer-service-output").innerHTML = customerServiceRequested;


            //Get duration in hours
            duration = hours;

            //Display the duration on the payment page
            document.getElementById("total-duration-output").innerHTML = duration;

            //Calculate Cost
            if (customerServiceRequested === "Leakage") {
                //Display service rate per hour
                document.getElementById("service-rate-output").innerHTML = leakageRate.toString();

                //Multiply the duration by the rate to get total cost
                totalCost = duration * leakageRate;

                //Display the total amount on the payment page
                document.getElementById("total-amount-output").innerHTML = totalCost;

                //Add total bill to customer records
                database.ref('/jobs/' + customerNumber.value).update({
                    customer_totalBill: totalCost.toString()
                });
                document.getElementById("customer-total-bill").innerHTML = customerTotalBill;

                //Display total amount on the payment button
                document.getElementById("total-amount").innerHTML = totalCost;
            } else if (customerServiceRequested === "Plumbing Installation") {
                //Display service rate per hour
                document.getElementById("service-rate-output").innerHTML = plumbingInstallationRate.toString();

                //Multiply the duration by the rate to get total cost
                totalCost = duration * plumbingInstallationRate;

                //Display the total amount on the payment page
                document.getElementById("total-amount-output").innerHTML = totalCost;

                //Add total bill to customer records
                database.ref('/jobs/' + customerNumber.value).update({
                    customer_totalBill: totalCost.toString()
                });
                document.getElementById("customer-total-bill").innerHTML = customerTotalBill;


                //Display total amount on the payment button
                document.getElementById("total-amount").innerHTML = totalCost;

            } else if (customerServiceRequested === "Replacement of damaged installations") {
                //Display service rate per hour
                document.getElementById("service-rate-output").innerHTML = damagedInstallationsRate.toString();

                //Multiply the duration by the rate to get total cost
                totalCost = duration * damagedInstallationsRate;

                //Display the total amount on the payment page
                document.getElementById("total-amount-output").innerHTML = totalCost;

                //Add total bill to customer records
                database.ref('/jobs/' + customerNumber.value).update({
                    customer_totalBill: totalCost.toString()
                });
                document.getElementById("customer-total-bill").innerHTML = customerTotalBill;


                //Display total amount on the payment button
                document.getElementById("total-amount").innerHTML = totalCost;
            } else if (customerServiceRequested === "Unblocking of clogged or slow drainages") {
                //Display service rate per hour
                document.getElementById("service-rate-output").innerHTML = unblockingCloggedRate.toString();

                //Multiply the duration by the rate to get total cost
                totalCost = duration * unblockingCloggedRate;

                //Display the total amount on the payment page
                document.getElementById("total-amount-output").innerHTML = totalCost;

                //Add total bill to customer records
                database.ref('/jobs/' + customerNumber.value).update({
                    customer_totalBill: totalCost.toString()
                });
                document.getElementById("customer-total-bill").innerHTML = customerTotalBill;


                //Display total amount on the payment button
                document.getElementById("total-amount").innerHTML = totalCost;
            } else if (customerServiceRequested === "Faulty Water Heater") {
                //Display service rate per hour
                document.getElementById("service-rate-output").innerHTML = faultyWaterHeaterRate.toString();

                //Multiply the duration by the rate to get total cost
                totalCost = duration * faultyWaterHeaterRate;

                //Display the total amount on the payment page
                document.getElementById("total-amount-output").innerHTML = totalCost;

                //Add total bill to customer records
                database.ref('/jobs/' + customerNumber.value).update({
                    customer_totalBill: totalCost.toString()
                });
                document.getElementById("customer-total-bill").innerHTML = customerTotalBill;


                //Display total amount on the payment button
                document.getElementById("total-amount").innerHTML = totalCost;
            } else if (customerServiceRequested === "Washing Machine Installation") {
                //Display service rate per hour
                document.getElementById("service-rate-output").innerHTML = washingMachineInstallationRate.toString();

                //Multiply the duration by the rate to get total cost
                totalCost = duration * washingMachineInstallationRate;

                //Display the total amount on the payment page
                document.getElementById("total-amount-output").innerHTML = totalCost;

                //Add total bill to customer records
                database.ref('/jobs/' + customerNumber.value).update({
                    customer_totalBill: totalCost.toString()
                });
                document.getElementById("customer-total-bill").innerHTML = customerTotalBill;

                //Display total amount on the payment button
                document.getElementById("total-amount").innerHTML = totalCost;
            } else {
                console.log('Error');
                alert('Error in calculating cost')
            }
        });
    }
}


