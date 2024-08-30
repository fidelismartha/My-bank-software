 loader = document.querySelector(".bt");

 const formm = document.getElementById("form");
 const Account_Number = localStorage.getItem("acount-number");
 console.log(Account_Number);
 formm.addEventListener("submit", async function (e){
    e.preventDefault();
    loader.classList.add("disabled");
    console.log(e);
   const form = new FormData(e.target);
   form.append('sender_account_number', Account_Number )
   console.log(form);

   const url = "https://ebuka-practice.serv00.net/api-learning/bank-api/transfer-api.php";
    const request =  await fetch(url, {
        method: 'POST',
        body: form,
    }).then((response) => response.json())
    .catch((error) =>{
        document.getElementById("emailHelp").textContent = error;
        document.getElementById("emailHelp").style.color="red";
    })
    console.log(request);
    loader.classList.remove("disabled");

    if (request.success == true) {
        document.getElementById("emailHelp").textContent = request.message;
        document.getElementById("emailHelp").style.color = "green";
        // profilepage()
    } else {
        document.getElementById("emailHelp").textContent = request.message;
        document.getElementById("emailHelp").style.color = "red";
    }
    e.target.reset();
 
})

function profilepage(){
    setTimeout(function(){
        window.location.href = "Usersprofile.html";
    }),4000000
}