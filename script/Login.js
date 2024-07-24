const $loginForm = document.querySelector("#loginForm")
const $inputs = $loginForm.querySelectorAll("input")

const hadleUserLogin =(e) =>{
    e.preventDefault()

  try{
    const valeus = Array.from($inputs).map(input => input.value);
    console.log(valeus)
    const user ={
        email:valeus[0],
        password:valeus[1],
}
fetch("https://api.escuelajs.co/api/v1/auth/login",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
})
 
   
.then(response => response.json())
.then(data => {
  if(data.access_token){
    localStorage.setItem( "token" , data.access_token)
    location.replace(window.origin + "/inedex.html")
  }
})
 
}
  catch(error){
    console.log(error)
  }
}
$loginForm.addEventListener("submit" , hadleUserLogin)