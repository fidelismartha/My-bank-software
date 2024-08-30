
// window.onload =   function(){
    const form = document.getElementById('form');
    let msg = document.querySelector(".msg");
    const alert = document.getElementById("alertbox");
    const container = document.querySelector(".cont");
    const loader = document.querySelector(".loader");
    form.addEventListener('submit',  async function  (e){
        e.preventDefault();
        loader.classList.remove("d-none");
        container.classList.add("d-none");
        const tokenid =   localStorage.getItem("login-token")
        const data = new FormData(e.target);
        data.append('user_token', tokenid);
        console.log(data);
        const url ="https://ebuka-practice.serv00.net/api-learning/bank-api/imageUpload-api.php";
        const request =  await fetch (url, {
            method: "POST",
            body: data,
        })
        .then((response) => response.json())
        .catch((error) =>{
            console.log(error);
        })
        console.log(request);
        
         if (request.success == true) {
            alert.classList.add('alert-success');
            msg.innerHTML = request.message;
            alert.classList.remove('d-none');
            setTimeout(()=>{
               window.location="Usersprofile.html";
            },7000)
            
         } else {
             alert.classList.add('alert-danger')
             msg.innerHTML = request.message;
             alert.classList.remove('d-none');
         }
         loader.classList.add('d-none');
         container.classList.remove('d-none');
          
    })

     

