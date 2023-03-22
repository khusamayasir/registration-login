function postVal() {
    const data = {
     username: document. getElementById('usrname').value,
     email: document. getElementById('email').value,
     password: document. getElementById('psw').value,
     phonenumber: document. getElementById('pno').value,
     gender: document. getElementById('gndr').value
    }

    fetch('/api/signup',{
        type:"POST",
        data:JSON.stringify(data)
    })

    alert("Congratulations!! You've Successfully Signup.");
    //console.log(username, email, password, phonenumber, gender);
}