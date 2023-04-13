// let form = document.querySelecter('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     return false;
// }

//const { json } = require("body-parser");

//const { TokenExpiredError } = require("jsonwebtoken");

// );
var btn = document.getElementById(`btnMe`);

console.log(`this is my btn element from login js file`, btn)

btn.addEventListener('click', event => {
    event.preventDefault()
    getVal('/api/login')
    .then(result => 
        {
            if (result.count.length === 1){
                window.location.href = "home.html";
                console.log(result)
            }
            else if (result.count.length === 0 || result.count.length === null) 
            {
                alert("Sorry Incorrect Username & Password");
            }
        })
    .catch(error => 
        {
            console.log(error)
        });
  });

function getVal(url) {
    return new Promise((resolve, reject) => {
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('psw').value
    }
    console.log(data, `I got this data here from get val func`)

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'content-type': 'application/json'}),
        //data: JSON.stringify(data)
    })
    .then(res => {
        // if (!response.ok)
        // {
        //   throw new Error('Network response was not ok');
        // }
        resolve (res.json())
        
    // }).then(result => { 
    //     resolve(result)
        
    //     console.log('Data is: ', result)
    // })
    }).catch(error => {
        console.log('ERROR!!')
        reject(error)
    })
});
    //console.log(username, password);
}