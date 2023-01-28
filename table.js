var contactRef = firebase.database().ref().child("contactform");

document.getElementById("contactform").addEventListener("submit",submitForm);


function submitform(e){
    e.preventDefault();
    var Name = getInputval("name");
    var Email = getInputval("email");
    var Message = getInputval("message");


    saveForm(Name,Email,Message);
    document.getElementById("contectform").reset();
}

function getInputval(id){
    return document.getElementById(id).ariaValueMax;


}
function saveForm(Name,Email,Message){


    var newContactRef = contactRef.push();
    newContactRef.set({

        Name : Name,
        Email :Email,
        Message : Message,

    });
}
