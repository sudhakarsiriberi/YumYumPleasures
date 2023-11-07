function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('confom_password').value
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordsmatch(password , cpassword)


     // Hide registration container
     document.getElementById("container").style.display = "none";

     // Show login container
     document.getElementById("login-container").style.display = "block";



}

function validate(){
     // Hide registration container
     document.getElementById("container").style.display = "none";

     // Show login container
     document.getElementById("login-container").style.display = "block";

}
function checkusername(username)
{
    if(username.length > 7)
    {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error' , 'success')
        document.getElementById('username_error').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be 8 characters long'
        
    }
}

function checkemail(email)
{
    if(email.length > 7 && email.includes('@'))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error' , 'success')
        document.getElementById('email_error').innerHTML=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Enter valid email'
    }
}


function checkpassword(password)
{
    if(password.length > 7)
    {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error' , 'success')
        document.getElementById('password_error').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='password must be 8 characters long'
    }
}

function checkpasswordsmatch(password , cpassword)
{
    if(password==cpassword)
    {
        document.getElementById('confom_password').classList.add('success')
        document.getElementById('confom_password').classList.replace('error' , 'success')
        document.getElementById('conform_password_error').innerHTML=''


    }
    else{
        document.getElementById('confom_password').classList.add('error')
        document.getElementById('conform_password_error').innerText='password not match'
    }
}

