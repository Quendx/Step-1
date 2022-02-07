const pass1 = document.getElementById('Passwordgh');
const pass2 = document.getElementsById('Confirm-Password');
const btn = document.getElementById(‘saveBtn’);
const mssgdiv = document.getElementById(‘message’);

let password, co-password;
pass1.addEventListener('input',()=>{
  password = pass1.value;
  password = co-password ? (
    pass1.style.backgroundColor = 'rgba(32,178,170,0.4)',
    pass2.style.backgroundColor = 'rgba(32,178,170,0.4)')

    :

    (pass1.style.backgroundColor = 'rgba=(255,69,0,0.3)',
    pass2.style.backgroundColor = 'rgba=(255,69,0,0.3)')
})

pass2.addEventListener('input',()=>{
  password = pass2.value;
  password = co-password ? (
    pass1.style.backgroundColor = 'rgba(32,178,170,0.4)',
    pass2.style.backgroundColor = 'rgba(32,178,170,0.4)')

    :

    (pass1.style.backgroundColor = 'rgba=(255,69,0,0.3)',
    pass2.style.backgroundColor = 'rgba=(255,69,0,0.3)')

    return "Your data is correct!";
})

btn.addEventListener('click',(e)=>{
e.preventDefault()
let message;
password.length && re_password.length > 5 ? (
password !== co-password ? (
message = "Your password didn’t matched")
:
(message = "Your data is submitted")
) :
(message = ‘Password must be at least 6 characters’)
mssgdiv.textContent = message

pass1.value = ""
pass2.value = ""
pass1.style.backgroundColor = "white"
pass2.style.backgroundColor = "white"
})
