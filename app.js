const sql = require('mssql');
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const session = require('express-session');
const { myDb } = require('./data');

const app = express();

//Call Signup & Login Pages
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
  // console.log(email,password)

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

//SQL CONNECTION For ForgetPassword
const configf = {
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

//FORGET PASSWORD API
app.post('/api/forgetPassword', function (req, res) {
  console.log(`This is from my end point api/forgetPassword`, req.body)
  const { currentPassword, newPassword,   confirmPassword } = req.body
  const query = `UPDATE usersignup 
                SET newPassword = '${newPassword}', confirmPassword= '${confirmPassword}'
                WHERE Password = ${currentPassword}` 

  const pool = new sql.ConnectionPool(configf);
  
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

//Running App on port 3000 :)
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});