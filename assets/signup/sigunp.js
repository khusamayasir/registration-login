var btn = document.getElementById(`btnMeS`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', event => {
    event.preventDefault()
    postVal();
  });

function postVal() {
    const data = {
     username: document. getElementById('usrname').value,
     email: document. getElementById('email').value,
     password: document. getElementById('psw').value,
     phonenumber: document. getElementById('pno').value,
     gender: document. getElementById('gndr').value
    }
    console.log(data, `I got this data here from post val func`)

    fetch('/api/signup', {
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
    console.log(username, email, password, phonenumber, gender);
}