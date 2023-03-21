const sql = require('mssql');

const config = {
    server: 'ppsserver2',
    database: 'signup_login',
    user: 'sa',
    password: 'Admin@123',
    port: 1433, // Default MSSQL port is 1433
    options: {
        encrypt: true, // For secure connection
        trustServerCertificate: true,
    }
};

const pool = new sql.ConnectionPool(config);

pool.connect().then(() => {
    return pool.request().query('SELECT * FROM loginuser');
}).then(result => {
    console.log(result.recordset);
}).catch(err => {
    console.log(err);
});
