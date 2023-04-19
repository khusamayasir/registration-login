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

// btn.addEventListener('click', event => {
//     event.preventDefault()
//     getVal('/api/login')
//     .then(result => 
//         {
//             sessionStorage.setItem("token", result.access_token);
//             const Token = sessionStorage.getItem("token");
//             console.log("Generated Token is: ",Token)

//             if(Token != "" || Token != undefined)
//             {
//                 console.log(result)
//                 window.location.href = "http://localhost:3000/home.html";
//             }
//             else 
//             {
//                 alert("Sorry Incorrect Username & Password");
//             }

//             // if (result["recordset"][0][''] === 1){
//             //     window.location.href = "home.html";
//             //     console.log(result)
//             // }
//             // else if (result["recordset"][0][''] === 0 || result["recordset"][0][''] === null) 
//             // {
//             //     alert("Sorry Incorrect Username & Password");
//             // }


//         })
//     .catch(error => 
//         {
//             console.log(error)
//         });
//   });
btn.addEventListener('click', event => {
    event.preventDefault();
    getVal('/api/login')
      .then(result => {
        sessionStorage.setItem("token", result.access_token);
        const Token = sessionStorage.getItem("token");
        console.log("Generated Token is: ", Token);
  
        if (result.access_token != undefined)
        {
          alert("ifrun")
          console.log(result);
          window.location.href = "/home.html";
        }
        else
        {
          alert("Sorry, incorrect username and password.");
        }
      })
      .catch(error => {
        console.log(error);
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
        //console.log(res)
        //sessionStorage.setItem("lastname", );
        //sessionStorage.getItem("lastname");
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