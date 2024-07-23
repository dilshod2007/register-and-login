const $registerForm = document.querySelector("#registerForm")
const $inputs = $registerForm.querySelectorAll("input")

const hadleUserRegister =(e) =>{
    e.preventDefault()

  try{
    const valeus = Array.from($inputs).map(input => input.value);
    console.log(valeus)
    const user ={
        name:valeus[0],
        email:valeus[1],
        password:valeus[2],
        avatar:valeus[3]
}
fetch("https://api.escuelajs.co/api/v1/users/",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
})
 
   
.then(response => response.json())
.then(data => {
  if(data.id){
    location.replace(location.origin + "/pages/login.html")
  }
})
 
}
  catch(error){
    console.log(error)
  }
}
$registerForm.addEventListener("submit" , hadleUserRegister)