
//slide Login and SignUp
let signUp = document.querySelector(".sign");
let login = document.querySelector(".log");
let a = 1;

function change(){
    if( a == 1 ){
        signUp.style.top="50%";
        login.style.top ="150%";
        return ( a = 2);
    }
    else if( a == 2 ){
        login.style.top="50%";
        signUp.style.top="-50%";
        return ( a = 1);
    }
    else{
        console.log("Error :(")
    }
}




//Open and Close ForgetPassword Box
let forgetPass = document.querySelector(".forg");
let b = 1;

function forget(){
    if( b == 1){
        forgetPass.style.transform="scale(1)"
        forgetPass.style.opacity ="1";
        login.style.opacity ="0";
        return ( b = 2)
    }
    else if( b == 2 ){
        login.style.opacity ="1";
        forgetPass.style.opacity ="0";
        forgetPass.style.transform="scale(.00001)"
        return ( b = 1 )
    }
    else{console.log("Forget Password Not Working :(")}
}







//Show And Hide ( ALL ) Password Inputs

//Select All ( eye ) classes
let passwordEye = document.querySelectorAll('.eye');
let IL= passwordEye.length;

//Select All Inputs => [Type="Password"] 
let passInput = document.querySelectorAll('input[type="password"]');
let PL = passInput.length

let c = 1;


function showHide(){
    if( c == 1){
        
        for ( let i = 0 ; i < PL ; i++ ) { //Change All Eye Icons From ( Hide ) to ( Show )
            passwordEye[i].classList.remove('fa-eye-slash'); 
            passwordEye[i].classList.add('fa-eye'); 
        };
        for ( let i = 0 ; i < PL ; i++ ) { //Change All Inputs => [Type="Password"] to [Type="Text"] 
            passInput[i].type = "text" 
        };
        return ( c = 2)
    }
    else if( c == 2 ){ // Same Updates 
        for ( let i = 0 ; i < PL ; i++ ) {
            passwordEye[i].classList.remove('fa-eye'); 
            passwordEye[i].classList.add('fa-eye-slash'); 
        };
        for ( let i = 0 ; i < PL ; i++ ) { passInput[i].type = "password" };
        return ( c = 1 )
    }
}






