const url = 'https://ebuka-practice.serv00.net/api-learning/bank-api/verification-api.php';
const loader = document.querySelector(".loader");
const container= document.querySelector(".cont")


document.getElementById('form').addEventListener("submit", async function (e) {
    e.preventDefault();
    loader.classList.remove("d-none");
    container.classList.add("d-none");
    console.log(e);
    console.log(e.target[0].value);
 
     document.getElementById("code").textContent=  ' this is your verification code ' +  +  localStorage.getItem('verify_code');
    const login_token = localStorage.getItem('login-token');
    const OTPr = localStorage.getItem('verify_code'); 
    const useremail = localStorage.getItem('email');
    console.log(login_token);
    console.log(OTPr);

    const form = new FormData();
    // form.append('otp_code', OTPr );
    form.append('user_token', login_token)
    form.append('email', useremail)
    form.append('otp_code',e.target[0].value )

    const result = await fetch(url, {
        method: 'POST',
        body: form,
    })
    .then((response) => response.json())
    console.log(result);
    
    if (result.success == true) {
        document.getElementById('success').innerHTML =result.message;
        document.getElementById('success').style.color = 'green';
        document.getElementById('erro').style.display="none";
        profile ()
        
        
    } else {
        document.getElementById('erro').innerHTML = result.message;
    }
    loader.classList.add("d-none");
    container.classList.remove("d-none");

    
})



function profile (){
   setTimeout(() =>{
window.location='Usersprofile.html '
   },2000)
}





// console.log(result.otp_code);
// console.log(result.use_token);