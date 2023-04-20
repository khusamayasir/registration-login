var btn = document.getElementById(`verifyMe`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', event => {
    event.preventDefault();
    verifyEmail('/api/emailForgPasw')
      .then(result => {
        // sessionStorage.setItem("token", result.access_token);
        // const Token = sessionStorage.getItem("token");
        // console.log("Generated Token is: ", Token);
  
        if (result.access_token != undefined)
        {
          alert("ifrun")
          console.log(result);
          window.location.href = "/forgPasw.html";
        }
        else
        {
          alert("Sorry, incorrect Email address");
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

function verifyEmail(url) {
    return new Promise((resolve, reject) => {
    const data = {
        email: document.getElementById('email').value,
    }
    console.log(data, `I got this data here from get val func`)

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'content-type': 'application/json'}),
    })
    .then(res => {
        resolve (res.json())
    })
    //.then(result => { 
    //     resolve(result)
    //     console.log('Data is: ', result)
    //})
    .catch(error => {
        console.log('ERROR!!')
        reject(error)
    })
});
}