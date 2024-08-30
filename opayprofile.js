
    const first_name = document.querySelector(".firstname");
    const last_name = document.querySelector(".lastname");
    const gender = document.querySelector(".gender");
    const accountnumber = document.querySelector("#accountnumber");
    const profile = document.querySelector(".profilee");
    const url = 'https://ebuka-practice.serv00.net/api-learning/bank-api/profile-api.php';
    window.onload = async function(){
     const tokenid =   localStorage.getItem("login-token")
        console.log(tokenid);
        const form = new FormData();
        form.append('user', tokenid);
        const request = await fetch(url,{
        method: 'POST',
        body: form,
        })
        .then((response) => response.json())
        console.log(request);
        localStorage.setItem('acount-number', request.account_number);
        if (request.success == true) {
            first_name.innerHTML = request.first_name;
             last_name.innerHTML = request.last_name;
             gender.innerHTML=request.gender;
             accountnumber.innerHTML= "<span>"+  " Account Number -"  +   "</span>"+ request.account_number;
             document.querySelector(".email").innerHTML = request.email;
            profile.innerHTML=`<img src="${request.image}" alt="" style="width: 100px; 
            height: 100px; border-radius: 100%;">`
             
        } else {
            window.location="opaylogin.html";
        }
    }  

