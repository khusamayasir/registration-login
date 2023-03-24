// let form = document.querySelecter('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     return false;
// }
// );

function postVal() {
    const data = {
        username: document.getElementById('usrname').value,
        password: document.getElementById('psw').value
    }

    fetch('/api/login', {
        type: "POST",
        data: JSON.stringify(data)
    }).then(res => {
        console.log("Congratulations!! You've Successfully Login.")
    }).catch(err => {
        console.log(err)
    })


    //console.log(username, password);
}