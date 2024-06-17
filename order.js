function Order(){
    //name validation
    let firstname = document.getElementById("Firstname").value;
    const nameexp = /^[a-z]+$/;
    let firstnamestatus = false;
    if(firstname === ""){
        document.getElementById("emptyfirstname").innerHTML="name is mandatory";
    }
    else{
        if(firstname.match(nameexp)){
            firstnamestatus = true;
        }
        else{
            document.getElementById("emptyfirstname").innerHTML="only characters";
        }
    }

    //name validation
    let lastname = document.getElementById("Lastname").value;
    let lastnamestatus = false;
    if(lastname === ""){
        document.getElementById("emptylastname").innerHTML="name is mandatory";
    }
    else{
        if(lastname.match(nameexp)){
            lastnamestatus = true;
        }
        else{
            document.getElementById("emptylastname").innerHTML="only characters";
        }
    }

    //number validation
    let number = document.getElementById("number").value;
    const numberexp =/^[0-9]+$/;
    let numberstatus= false;

    if(number ===""){
        document.getElementById("emptynumber").innerHTML="number is mandatory";
    }
    else{
        if(number.match(numberexp)){
            if(number.length === 10){
                numberstatus=true;
            }
            else{
                document.getElementById("emptynumber").innerHTML="invalid phone number";
            }
        }
        else{
            document.getElementById("emptynumber").innerHTML="only numbers";
        }
    }

    //email validation
    let email = document.getElementById("emailid").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus=false;

    if(email === ""){
        document.getElementById("emptyemail").innerHTML="email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("emptyemail").innerHTML="email format is not correct";
        }
    }

    //valid or not city
    let city = document.getElementById("city").value;
    let citystatus = false;
    if(city===""){
        document.getElementById("emptycity").innerHTML="city name is mandatory";
    }
    else{
        if(city.match(nameexp)){
            citystatus = true;
            }
            else{
                document.getElementById("emptycity").innerHTML="our delivery facility is not available to your loction"
            }
        }

    //state
    let state = document.getElementById("State").value;
    let statestatus = false;
    if(state === ""){
        document.getElementById("emptystate").innerHTML="state name is mandatory";
    }
    else{
        if(state.match(nameexp)){ 
            statestatus = true;
        }
    }

    // address
    let address = document.getElementById("address").value;
    let addressstatus = false;
    if(state === ""){
        document.getElementById("emptyaddress").innerHTML="address name is mandatory";
    }
    else{
        if(address.match(nameexp)){ 
            addressstatus = true;
        }
    }

    //landmark
    let landmark = document.getElementById("landmark").value;
    let landmarkstatus = false;
    if(state === ""){
        document.getElementById("emptylandmark").innerHTML="landmark name is mandatory";
    }
    else{
        if(landmark.match(nameexp)){ 
            landmarkstatus = true;
        }
    }

    // return
    if(firstnamestatus === true && landmarkstatus === true && landmarkstatus === true && numberstatus === true && emailstatus === true && citystatus === true && statestatus === true && addressstatus === true){
        alert("Your order for the Ay Mosquito Machine has been successfully placed");
    }
    else {
        return false;
    }
    
}

function contact(){
    //name
    let name=document.getElementById("username").value;
    const nameexp = /^[a-z]+$/;
    let namestatus = false;
    if(name === ""){
        document.getElementById("Emptyname").innerHTML="For submission, the name is mandatory";
    }
    else if(name.match(nameexp)){
        namestatus = true;
    }
    else{
        document.getElementById("Emptyname").innerHTML="The name is invalid";
    }
    
    //email
    let email = document.getElementById("email").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus = false;
    
    if(email === ""){
        document.getElementById("EmptyEmail").innerHTML="For submission, the email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("EmptyEmail").innerHTML="Invalid email";
        }
    }

    //return
    if(namestatus === true && emailstatus === true){
        alert("Your comment has been received. We will answer or help you through the email submitted in the form");
    }
}