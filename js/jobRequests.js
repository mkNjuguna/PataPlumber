//Getting Elements
const title = document.getElementById("customer-title-input");
const customerFname = document.getElementById("customer-first-name-input");
const customerSname = document.getElementById("customer-second-name-input");
const customerPhonenumber = document.getElementById("customer-phone-number-input");
const customerServiceSelected = document.getElementById("customer-service-requested-input");

const plumberServiceOffered = document.getElementById("services-input");




//Sending customer request to database
function uploadJobDetails(){

    if ( title.value && customerFname.value && customerSname.value && customerPhonenumber.value && customerServiceSelected.value  == ""){
        alert('Cannot send without any inputs');
        return false;
    } else {
        firebase.database().ref('/jobs/' + customerPhonenumber.value).set({
            customer_title: title.value,
            customer_fname: customerFname.value,
            customer_sname: customerSname.value,
            customer_phonenumber: customerPhonenumber.value,
            customer_service_requested: customerServiceSelected.value
        })
            .then(function () {
                console.log('Request sent to db');
                alert('Request added successfully');
            })
            .catch(function (error) {
                console.log('Data upload not successful')
                let errorMessage = error.message;
                alert(errorMessage)
            });
    }
    if (customerServiceSelected.value === plumberServiceOffered.value){
        document.getElementById("request-message-output").innerHTML = "You have a request!";
    } else {
        console.log('Error sending request')
    }

}
