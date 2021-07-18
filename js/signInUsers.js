
function signInPlumber(){
    //Getting elements using their IDs
    const plumberEmail = document.getElementById("plumber-email-signin-input").value;
    const plumberPassword = document.getElementById("plumber-password-signin-input").value;

    //Sign In Event
    firebase.auth().signInWithEmailAndPassword(plumberEmail, plumberPassword)
        .then(function (){
            //The function will work if sign in is successful
            alert('You have successful signed in!')
            window.location="PlumberPage.html"
        })
        .catch(function (error){
            //Error Handling
            console.log('Sign In not successful');
            let errorMessage = error.message;
            alert(errorMessage);
        });
}
function plumberSignOut(){
    firebase.auth().signOut();
    alert("You have signed out!");
    window.location ="SignIn.html";
}

function signInHomeUser(){
    //Getting elements using their IDs
    const homeuserEmail = document.getElementById("homeuser-email-signin-input").value;
    const homeuserPassword = document.getElementById("homeuser-password-signin-input").value;

    //Sign In Event
    firebase.auth().signInWithEmailAndPassword(homeuserEmail, homeuserPassword)
        .then(function (){
            //The function will work if sign in successful
            alert('You have successfully signed in!')
            window.location="homeUserHome.html"
        })
        .catch(function (error){
            console.log('Sign In not successful ')
            let errorMessage = error.message;
            alert(errorMessage);
        });
}
function homeUserSignOut(){
    firebase.auth().signOut();
    alert("You have signed out!");
    window.location = "SignIn.html"
}

firebase.auth().onAuthStateChanged(function (user){
    if (user){
        //Is signed in
        let email = user


    } else{
        //No user signed in

    }

});