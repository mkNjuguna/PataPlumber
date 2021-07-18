
function loginAdmin(){
    //Getting elements
    let adminEmail = document.getElementById("admin-email-input");
    let adminPassword = document.getElementById("admin-password-input");

    //Sign In event
    firebase.auth().signInWithEmailAndPassword(adminEmail.value, adminPassword.value)
        .then(function (){
        //The function works if login is successful
            alert("Successfully logged in!");
            window.location="adminDashboard.html"
        }).catch(function (error){
            //Error Handling
            console.log('Log in not successful');
            let errorMessage = error.message;
         alert(errorMessage);
        });
}

function adminSignOut(){
    firebase.auth().signOut();
    alert("You have signed out");
    window.location="AdminLogInPage.html";
}

firebase.auth().onAuthStateChanged(function (user){
    if (user){
        //Is signed in
        let email = user


    } else{
        //No user signed in

    }

});