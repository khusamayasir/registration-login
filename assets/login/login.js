// let form = document.querySelecter('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     return false;
// }
// );

function postVal() {
    const data = {
        username : document. getElementById('usrname').value,
        password : document. getElementById('psw').value
    }
    
    fetch('/api/login',{
        type:"POST",
        data:JSON.stringify(data)
    })

    alert("Congratulations!! You've Successfully Login.")

    //console.log(username, password);
}