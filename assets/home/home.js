const btn = document.getElementById("clickMe");

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', function() {
  console.log("Hey Usama Yasir")
  // let Token = sessionStorage.getItem("token")
  // console.log(Token)
  sessionStorage.removeItem("token")
  // let Tokenss = sessionStorage.getItem("token")
  // console.log(Tokenss)
  window.location.href = "/login.html";
});