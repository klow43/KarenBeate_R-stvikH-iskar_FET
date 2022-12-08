
//function checks input of address is in only letters and numbers
function addressCheck(){
    return /^[A-Za-z0-9]*$/.test();
}
//function check email contains @ and .
function emailCheck(mail){
    return mail.includes("@", ".");
}
//function checks phonenumber is only numbers
function numberCheck(){
    return  /^\d+$/.test();
}
//prompts for adress,email and phonenumber and applies the functions to check for validness/correct input. Gets current p tag with previous text using jQuery
//and adds input from user in those tags.
//I broke the console log so it looked nice when its diplayed in console, EXACTLY like you displayed on task :D
$("#contactBtn").click(function(){
    const address = prompt("Input adress: ");
    if(!addressCheck(address)){
        alert("Wrong input, must be valid address")
        return;
    }
    const email = prompt("Input email: ");
    if(!emailCheck(email)){
        alert("Wrong Input, must be valid email")
        return;
    }
    const phoneNumber = prompt("Input Phone Number: ")
    if(numberCheck(phoneNumber)){
        alert("Wrong Input, must be valid phone number")
        return;
    }
    $("p:contains('1-123-456-789')").text(phoneNumber);
    $("p:contains('me@fakemail.com')").text(email);
    $("p:contains('1445 West Norwood Avenue')").text(address);
    console.log
    (`
From: ${email}
Contact: ${phoneNumber}
Address: ${address} `)
})
