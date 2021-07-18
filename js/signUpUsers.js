function signUpPlumber(){
    //Get elements using their IDs
    const plumberEmail = document.getElementById("plumber-email-signup-input").value;
    const plumberPassword = document.getElementById("plumber-password-signup-input").value;

    //Sign Up Event for plumbers
    firebase.auth().createUserWithEmailAndPassword(plumberEmail, plumberPassword)
        .then(function (){
            //If sign up is successful
            alert('You have successfully signed up!')
            window.location="SignIn.html"
        })
        .catch(function (error){
            //Error Handling
            console.log('Sign up not successful');
            let errorMessage = error.message;
            alert(errorMessage);
        });
}

function signUpHomeUser(){
    //Get elements using their IDs
    const homeuserEmail = document.getElementById("homeuser-email-signup-input").value;
    const homeuserPassword = document.getElementById("homeuser-password-signup-input").value;

    //Sign Up event for home users
    firebase.auth().createUserWithEmailAndPassword(homeuserEmail, homeuserPassword)
        .then(function (){
            //If sign up is successful
            alert('You have successfully signed up!')
            window.location="SignIn.html"
        })
        .catch(function (error){
            //Error Handling
            console.log('Sign up not successful');
            let errorMessage = error.message;
            alert(errorMessage);
        });
}
