var btn = document.getElementById(`clickMe`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', function() {
  console.log("Hey Usama Yasir")
  let Token = sessionStorage.getItem("token")
  //sessionStorage.removeItem(Token)
  console.log(Token)
  window.location.href = "/home.html";
});

  // const btn = document.getElementById("clickMe");
  // btn.addEventListener("click", function() {
  //   let Token = sessionStorage.getItem("token");
  //   console.log(Token);
  //   window.location.href = "/home.html";
  // });