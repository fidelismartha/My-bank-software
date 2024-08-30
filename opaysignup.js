
let erro = document.getElementById('err').style.color="red";
let success = document.getElementById('success').style.color="green";
const loader = document.querySelector('.loader');
const container = document.querySelector('.cont')

document.getElementById("form").addEventListener("submit",  async function (e){
    e.preventDefault()
    loader.classList.remove("d-none");
    container.classList.add('d-none');
    console.log(e);
    const form = new FormData(e.target);
   console.log(form);
const url ='https://ebuka-practice.serv00.net/api-learning/bank-api/registration-api.php';
   const result = await fetch(url, {
    method: 'POST',
    body: form,
   
   }).then((response) => response.json())
   console.log(result);
   if (result.success == true) {
        document.getElementById('success').innerHTML =result.message;
        const token = result.user_token;
        localStorage.setItem('usertoken', token);
        console.log(token);
        document.getElementById('err').style.display = 'none';
        userslogingpage()
    
   } else {
        document.getElementById('err').innerHTML=result.message;
   }
   loader.classList.add('d-none');
   container.classList.remove('d-none');

 
})

function userslogingpage(){
     setTimeout(() =>{
          window.location = 'opaylogin.html';
     
},2000);
}