var btn = document.getElementById(`changeMe`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', event => {
    event.preventDefault()
    changePassword();
  });

function changePassword() {
    const data = {
     currentPassword: document. getElementById('curpsw').value,
     newPassword: document. getElementById('newpsw').value,
     confirmPassword: document. getElementById('conpsw').value,
    }
    console.log(data, `I got this data here from post val func`)

    // fetch('/api/signup', {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: new Headers({'content-type': 'application/json'}),
    // }).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err)
    // })
    // console.log(username, email, password, phonenumber, gender);
}