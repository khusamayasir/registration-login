// let form = document.querySelecter('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     return false;
// }
// );
var btn = document.getElementById(`btnMe`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', event => {
    event.preventDefault()
    getVal();
  });

function getVal() {
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('psw').value
    }
    console.log(data, `I got this data here from get val func`)

    fetch('/api/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'content-type': 'application/json'}),
        //data: JSON.stringify(data)
    }).then(res => {
        // console.log("Congratulations!! You've Successfully Login.")
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    //console.log(username, password);
}