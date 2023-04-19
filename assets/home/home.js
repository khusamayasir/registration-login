var btn = document.getElementById(`clickMe`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', event => {
    event.preventDefault();
    function getVal() {
      console.log("HEY USAMA")
      let Token = sessionStorage.getItem("token")
      //sessionStorage.removeItem(Token)
      console.log(Token)
      window.location.href = "/home.html";
    }

    getVal();
  });