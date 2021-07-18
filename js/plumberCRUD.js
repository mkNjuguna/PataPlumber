//Getting Elements
const title = document.getElementById("title-input");
const plumberfirstname = document.getElementById("plumber-firstname-input");
const plumbersecondname = document.getElementById("plumber-secondname-input");
const plumberphonenumber = document.getElementById("plumber-phonenumber-input");
const plumberService = document.getElementById("services-input");
const plumberDocument = document.getElementById("plumber-document");

// const savetoprofilebutton = document.getElementById("save-to-profile-btn");
// const plumbereditbtn = document.getElementById('plumber-edit-btn');
// const plumberdeletebtn = document.getElementById('plumber-delete-btn');
const database = firebase.database();


// plumberdocument.addEventListener('change', function (e){
//Sending data to database
function uploadData(){
    if (plumberphonenumber.value == ""){
        alert('Cannot upload data without phone number');
        return false;
    } else {

        database.ref('/plumbers/' + plumberphonenumber.value).set({
            plumber_title: title.value,
            plumber_firstname: plumberfirstname.value,
            plumber_secondname: plumbersecondname.value,
            plumber_phonenumber: plumberphonenumber.value,
            plumber_serviceoffered: plumberService.value
        })
            .then(function () {
                console.log('Data uploaded');
                alert('You have uploaded your data');
            })
            .catch(function (error) {
                console.log('Data upload not successful')
                let errorMessage = error.message;
                alert(errorMessage);
            });
    }
}

//Uploading file
plumberDocument.addEventListener('change', function (e){
    //Get file
    let file = e.target.files[0];
    //Creating storage ref
    let storageRef = firebase.storage().ref('/plumber_document/' + file.name);
    //Upload file
    storageRef.put(file);
});


//Retreive data from database
function getPlumberData(){
    let phoneNumberSearch = document.getElementById("search-number").value;
    database.ref('/plumbers/' + phoneNumberSearch).once('value').then(function (dataSnapshot){
        let plumberTitle = dataSnapshot.val().plumber_title;
        let plumberFirstname = dataSnapshot.val().plumber_firstname;
        let plumberSecondname = dataSnapshot.val().plumber_secondname;
        let plumberPhoneNumber = dataSnapshot.val().plumber_phonenumber;
        let plumberServiceOffered = dataSnapshot.val().plumber_serviceoffered;

        document.getElementById("plumber-title-output").innerHTML=plumberTitle;
        document.getElementById("plumber-firstname-output").innerHTML=plumberFirstname;
        document.getElementById("plumber-secondname-output").innerHTML=plumberSecondname;
        document.getElementById("plumber-phonenumber-output").innerHTML=plumberPhoneNumber;
        document.getElementById("plumber-service-output").innerHTML=plumberServiceOffered;
    })
        .catch(function (error){
            console.log('Retrieval unsuccessful')
            let errorMessage = error.message;
            alert(errorMessage);
            console.log(errorMessage);
        });
}

function editPlumberData(){
    console.log('You have clicked the edit button');

    let phoneNumberSearch = document.getElementById("search-number");
    database.ref('/plumbers/' + phoneNumberSearch.value).update({
        plumber_serviceoffered: plumberService.value
    })
        .then(function (){
            alert('You have updated your profile!')
        })
        .catch(function (error){
            console.log('Update not successful');
            let errorMessage = error.message;
            alert(errorMessage);
        });
}

function deletePlumberData(){
    console.log('You have clicked the delete button');
    let phoneNumberSearch = document.getElementById("search-number");
    database.ref('/plumbers/' + phoneNumberSearch.value).remove()
        .then(function (){
            alert('You have deleted your profile');
        })
        .catch(function (error){
            console.log('Error deleting profile');
            let errorMessage = error.message;
            alert(errorMessage);
        })
}
// }());

