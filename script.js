const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword')
const passwordField = document.querySelector(".password-field")
const repasswordfield = document.querySelector(".repassword-field")
const btn = document.querySelector("#submit")


let div1 =  document.createElement("p");
let div2 = document.createElement("p");

function checkPassword(input)
{
    if (password.value === "")
    {
        console.log(password)
        div1.textContent = "*Password should not be empty";
        div1.style.color = "red";
        passwordField.appendChild(div1)
        div2.textContent = "*Password should not be empty";
        div2.style.color = "red";
        repasswordfield.appendChild(div2)
    }
    else if(password.value === repassword.value)
    {
        div1.textContent = "Password Matched";
        div2.textContent =  "Password Matched";
        div1.style.color = "green";
        div2.style.color = "green";
        passwordField.appendChild(div1)
        repasswordfield.appendChild(div2)
    }
    else
    {
        div1.textContent = "Password Incorrect";
        div2.textContent =  "Password Incorrect";
        div1.style.color = "red";
        div2.style.color = "red";
        passwordField.appendChild(div1)
        repasswordfield.appendChild(div2)
    }
}

btn.addEventListener('click',checkPassword);