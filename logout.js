

async function logout(){

        const tokenid =   localStorage.getItem("login-token");
        console.log(tokenid);
        const data = new FormData();
        data.append("user_token", tokenid);
        console.log(data);
        const url ="https://ebuka-practice.serv00.net/api-learning/bank-api/logout-api.php"
        const dataa = await fetch(url,{
          method: "POST",
          body: data,
        }) .then((response)=>response.json());
        console.log(dataa);
        if (dataa.success === true) {
          gobacktologin() 
        } else {
          
        }
  
}

function gobacktologin() {
      window.location="opaylogin.html";
    }

    