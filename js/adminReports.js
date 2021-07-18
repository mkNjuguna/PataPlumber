function generatePlumberReport(){
    //Getting data from Realtime DB
    firebase.database().ref('/plumbers/').once('value', function (allPlumberRecords){
        allPlumberRecords.forEach(
            function (currentRecord){
                let title = currentRecord.val().plumber_title;
                let firstname = currentRecord.val().plumber_firstname;
                let secondname = currentRecord.val().plumber_secondname;
                let phonenumber = currentRecord.val().plumber_phonenumber;
                let serviceoffered = currentRecord.val().plumber_serviceoffered;
                addPlumberRecordsToTable(title, firstname, secondname, phonenumber, serviceoffered);
            }
        );
    })
        .then(function (){
            console.log('Report Generated')
            alert('Plumber Report Generated Successfully!')
        }).catch(function (error){
            console.log('Report Not Generated')
        let errorMessage = error.message;
        alert(errorMessage)
    });
}

//Populating table with data
function addPlumberRecordsToTable(title, firstname, secondname, phonenumber, serviceoffered){
    let tableBody = document.getElementById("tbody-plumbers");
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");

    tableData.innerHTML = title;
    tableData1.innerHTML = firstname;
    tableData2.innerHTML = secondname;
    tableData3.innerHTML = phonenumber;
    tableData4.innerHTML = serviceoffered;

    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);

    tableBody.appendChild(tableRow);
}

function generateCustomerRequestReports(){
    //Getting data from Realtime DB
    firebase.database().ref('/jobs/').once('value', function (allJobRecords){
        allJobRecords.forEach(
            function (currentRecord){
                let title = currentRecord.val().customer_title;
                let firstname = currentRecord.val().customer_fname;
                let secondname = currentRecord.val().customer_sname;
                let phonenumber = currentRecord.val().customer_phonenumber;
                let serviceRequested = currentRecord.val().customer_service_requested;
                let totalBill = currentRecord.val().customer_totalBill;
                addJobRecordsToTable(title, firstname, secondname, phonenumber, serviceRequested, totalBill);
            }
        );
    })
        .then(function (){
            console.log('Report Generated')
            alert('Customer Report Generated Successfully!')
        }).catch(function (error){
        console.log('Report Not Generated')
        let errorMessage = error.message;
        alert(errorMessage)
    });
}
function addJobRecordsToTable(title, firstname, secondname, phonenumber, serviceRequested, totalBill){
    let tableBody = document.getElementById("tbody-customers");
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");
    let tableData5 = document.createElement("td");

    tableData.innerHTML = title;
    tableData1.innerHTML = firstname;
    tableData2.innerHTML = secondname;
    tableData3.innerHTML = phonenumber;
    tableData4.innerHTML = serviceRequested;
    tableData5.innerHTML = totalBill;

    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    tableRow.appendChild(tableData5);

    tableBody.appendChild(tableRow);
}


function downloadDocs(){
    const storageRef = firebase.storage().ref();

    storageRef.child('/plumber_document/PataPlumberWorkPlan.pdf').getDownloadURL()
        .then((url)=>{
            let req = new XMLHttpRequest();
            req.responseType = 'blob';
            req.onload = () =>{
            };
            req.open('GET', url);
            req.send();
        })
        .catch((error) => {
            let errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        })

}

function getTotalAmountOfBill(){
    const database = firebase.database();
    let rootRef = database.ref();
    let rootReq = rootRef.child("jobs");
    rootReq.on('value', getReq);
    function getReq(snap){
        let t1 = 0;
        snap.forEach(keyReq => {
            let total = keyReq.val().customer_totalBill;
            let t = parseInt(total);
            t1 += t;
        });
        document.getElementById("cumulative-bill-output").innerHTML = t1;
    }

}