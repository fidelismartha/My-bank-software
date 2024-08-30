const formm = document.getElementById("form");
const err = document.querySelector(".err");
const register = document.querySelector(".success");
const loader = document.querySelector(".loader");
const container = document.querySelector(".cont");
formm.addEventListener("submit", async function (e) {
    e.preventDefault();
    loader.classList.remove("d-none");
    container.classList.add("d-none");
    console.log(e);
    const form = new FormData(e.target);
    localStorage.setItem("email",e.target[0].value);
    console.log(form);
    const url = 'https://ebuka-practice.serv00.net/api-learning/bank-api/login-api.php';
    const request = await fetch(url, {
        method: 'POST',
        body: form
    }).then((response) => response.json())
    console.log(request);
    console.log(request.message);
    console.log(request.verification_status);
    // const code = request.otp_code;
    console.log(request.token);
    localStorage.setItem('login-token', request.token);
    
    // localStorage.setItem('verify_code', code);

    if (request.success == true) {
        register.innerHTML = request.message;
        register.style.color = "green";
        
         if (request.verification_status == true) {
        profile();
    }
    else {
        verifivationpage()
    }

    } else {
        err.innerHTML = request.message;
        err.style.color = "red";
    }
    loader.classList.add("d-none");
    container.classList.remove("d-none");





    if (request.success === true) {
        register.innerHTML = request.message;
        err.style.display = "none";
    }
})

function profile() {
    setTimeout(() => {
        window.location = "Usersprofile.html";
    }, 3000)
}


function verifivationpage() {
    setTimeout(() => {
        window.location = "opayverificationpg.html";
    }, 1000)
}