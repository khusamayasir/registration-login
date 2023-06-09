const sql = require('mssql');
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');	
const nodemailer = require('nodemailer');
const session = require('express-session');
const { myDb } = require('./data');
const crypto = require('crypto');
// const algorithm = 'aes-256-cbc'; //Using AES encryption
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

const app = express();

//Call Signup & Login Pages aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('assets/login/'));
app.use(express.static('assets/signup/'));
app.use(express.static('assets/home/'));
app.use(express.static('assets/emailForgPasw/'));
app.use(express.static('assets/forgetPasw/'));

//Initialize the express-session
app.use(session({
  secret: 'your-secret-key', // a secret key used to sign the session ID cookie
  resave: false, // do not save session if unmodified
  saveUninitialized: false // do not create a session until something is stored
}));
//app.use(express.static("./routes/userRoutes"));

//Calling data.js
myDb()

//SQL CONNECTION For SIGNUP
const config = {
  server: 'ppsserver2',
  database: 'registration-login',
  user: 'sa',
  password: 'Admin@123',
  port: 1433, // Default MSSQL port is 1433
  options: {
      encrypt: true, // For secure connection
      trustServerCertificate: true,
  }
};

// Set the JWT secret key
const JWT_SECRET_KEY = 'my_secret_key';

//SIGNUP API
app.post('/api/signup', function (req, res) {
  console.log(`This is from my end point api/signup`, req.body)
  const { username, email, password, phonenumber, gender } = req.body
  const query = `INSERT INTO usersignup (UserName, Email, Password, PhoneNumber, Gender) VALUES ('${username}', '${email}', '${password}', '${phonenumber}', '${gender}')` 

  const pool = new sql.ConnectionPool(config);
  
  pool.connect().then(() => {
    return pool.request().query(query);
  }).then(result => {  
    console.log(`this is my result from db`, result.recordset)
    res.send("User inserted into database")
    //console.log(`from pool db is connected`,result.recordset);
  }).catch(err => {
    console.log(err)
    res.status(500).send("Error inserting user into database")
  });
})

//SQL CONNECTION For LOGIN
const configl = {
  server: 'ppsserver2',
  database: 'registration-login',
  user: 'sa',
  password: 'Admin@123',
  port: 1433, // Default MSSQL port is 1433
  options: {
    encrypt: true, // For secure connection
    trustServerCertificate: true,
  }
};

//LOGIN API
app.post('/api/login', function (req, res) {
  console.log(`This is from my end point api/login`, req.body)
  const {email, password } = req.body
  const query_login = `SELECT COUNT(*) FROM usersignup WHERE Email= '${email}' AND Password= '${password}'`;

  const pool = new sql.ConnectionPool(configl);

  pool.connect().then(() => {
    return pool.request().query(query_login);
  }).then(result => {
    // let Result=JSON.parse(result)
    console.log(`this is my result from db`, result.recordset)
    //res.send(result)

    if(result["recordset"][0][''] === 1) 
    {
      // Generate a JWT token
      const token = jwt.sign({ sub: password }, JWT_SECRET_KEY, { expiresIn: '30m' });

      // Return the token in the response
      const data = {access_token: token, count: result.recordset}
      res.send(data);
      console.log('Your login token is', token)
    }
    else if (result["recordset"][0][''] === 0)
    {
      const data = {count: result.recordset}
      res.send(data);
      console.log('Sorry!! Incorrect Username or Password');
    }
  }).catch(err => {
    console.log(err)
    res.status(500).send("Error querying database")
  });
})

//SQL CONNECTION For EmailVerification to ForgetPassword
const confige = {
  server: 'ppsserver2',
  database: 'registration-login',
  user: 'sa',
  password: 'Admin@123',
  port: 1433, // Default MSSQL port is 1433
  options: {
    encrypt: true, // For secure connection
    trustServerCertificate: true,
  }
};

//EMAIL VERIFY TO FORGET PASSWORD API
app.post('/api/email', function (req, res) {
  console.log(`This is from my end point api/emailForgPasw`, req.body)
  const {email } = req.body
  const query_verify = `SELECT COUNT(*) FROM usersignup WHERE Email= '${email}'`;

  const pool = new sql.ConnectionPool(confige);

  pool.connect().then(() => {
    return pool.request().query(query_verify);
  }).then(result => {
    // let Result=JSON.parse(result)
    console.log(`this is my result from db`, result.recordset)
    //res.send(result)
    
    const query_retrivedata = `SELECT * FROM usersignup WHERE Email= '${email}'`;

    if(result["recordset"][0][''] === 1) 
    {
      pool.connect().then(() => {
        return pool.request().query(query_retrivedata);
      })

      console.log(query_retrivedata); 
      // // Generate a JWT token
      // const token = jwt.sign({ sub: password }, JWT_SECRET_KEY, { expiresIn: '30m' });

      // // Return the token in the response
      const data = {count: result.recordset}
      res.send(data);
      console.log('Your Data is Matched')
    }
    else if (result["recordset"][0][''] === 0)
    {
      const data = {count: result.recordset}
      res.send(data);
      console.log('Sorry!! Incorrect Email address');
    }
  }).catch(err => {
    console.log(err)
    res.status(500).send("Error querying database")
  });
})

//Nodemailer Module

//Create Nodemailer transporter using  Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER, //   you can use directly user: 'youremail@gmail.com',
   pass: process.env.PASS //  you can use instead    pass: 'yourpassword'
  }
});

// Setting up the mailOptions
  const mailOptions = {
   from: process.env.EMAIL_FROM,
  to: email, // the user email
  subject: ' for example: Reset your Password',
  text: 'Reset Password mail',
   html: <h4>Reset Password</h4> // add your HTML code here.
                    
};

//Deliver the mailOptions using the sendMail()
const  info = transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
});

//Running App on port 3000 :)
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
}); 