const express = require('express');
const app = express();

app.use(express.static('assets/login'));
app.use(express.static('assets/signup'));

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

// const path = require('path');

  // serve your css as static
// app.use(express.static(__dirname));

// app.get('/', function(req, res) {
//     res.sendFile(path.join((__dirname, '/assets/login/login.html'));
//     //res.sendFile(path.join(__dirname, '/assets/signup/signup.html'));
//   });
 // C:\Users\Usama Yasir\Desktop\Nodejs\registration-login\assets\login\login.html
// app.get('/', (req, res) => {

//     var loginText= "Login Text";

// //  res.send(__dirname + './assetslogin/login.html/');
//   res.send(
// `
// <script>
// let form = document.querySelecter('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     return false;
// }
// );
// </script>
// <body style="background: #733eb9; font-family: rubik,sans-serif; display: flex; align-items: center;  ">

// <div class="login-form" style="background: #fff; width: 500px; margin: 65px auto; display: -webkit-box; display: flex;  -webkit-box-orient: vertical; -webkit-box-direction: normal; flex-direction: column; border-radius: 4px; box-shadow: 0 2px 25px rgba(0,0,0,.2)">
// <form>
//     <h1 style="padding: 35px 35px 0; font-weight: 300">Login</h1>
//     <div class="content" style="padding: 35px; text-align: center">
//         <div class="input-field" style="padding: 12px 5px">
//             <input type="email" placeholder="Email" autocomplete="nope" style="font-size: 16px; display: block; font-family: rubik,sans-serif; width: 100%; padding: 10px 1px; border: 0; border-bottom: 1px solid #747474; outline: none; -webkit-transition: all .2s; transition: all .2s">
//         </div>
//         <div class="input-field" style="padding: 12px 5px">
//             <input type="password" placeholder="Password" autocomplete="new-password"  style="font-size: 16px; display: block; font-family: rubik,sans-serif; width: 100%; padding: 10px 1px; border: 0; border-bottom: 1px solid #747474; outline: none; -webkit-transition: all .2s; transition: all .2s">
//         </div>
//         <a href="#" class="link" style="text-decoration: none; color: #747474; letter-spacing: .2px; text-transform: uppercase; display: inline-block; margin-top: 20px;">Forgot Your Password?</a>
//     </div>
//     <div class="action" style="display: -webkit-box; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; flex-direction: row;" >
//         <button type="get" formaction="./signup/signup.html" onMouseOver="this.style.background:='red'" style="width: 100%; border: none; padding: 18px; font-family: rubik,sans-serif; cursor: pointer; text-transform: uppercase; background: #e8e9ec; color: #777; border-bottom-left-radius: 4px; border-bottom-right-radius: 0; letter-spacing: .2px; outline: 0; -webkit-transition: all .3s; transition: all .3s;">Register</button>
//         <button style="width: 100%; border: none; padding: 18px; font-family: rubik,sans-serif; cursor: pointer; text-transform: uppercase; background: #e8e9ec; color: #777; border-bottom-left-radius: 4px; border-bottom-right-radius: 0; letter-spacing: .2px; outline: 0; -webkit-transition: all .3s; transition: all .3s">Sign in</button>
//     </div>
// </form>
// </div>

// </body>
//     `);
// });