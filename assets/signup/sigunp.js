const { response } = require("express")

function postVal() {
    const data = {
     username: document. getElementById('usrname').value,
     email: document. getElementById('email').value,
     password: document. getElementById('psw').value,
     phonenumber: document. getElementById('pno').value,
     gender: document. getElementById('gndr').value
    }

    fetch('/api/signup', {
        method: "POST",
        data: JSON.stringify(data)
    })
    
    .then((res)=> {
        console.log("Congratulations!! You've Successfully Signup.")
    })
    .catch(err => {
        console.log(err)
    })

    //console.log(username, email, password, phonenumber, gender);
}