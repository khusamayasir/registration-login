var btn = document.getElementById(`clickMe`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', event => {
    event.preventDefault()
    //closeSession();
  });