const sql = require('mssql');

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

const pool = new sql.ConnectionPool(config);

const myDb = () => pool.connect().then(() => {
    return pool.request().query('SELECT * FROM usersignup');
}).then(result => {
    console.log(`from pool db is connected`,result.recordset);
}).catch(err => {
    console.log(err);
});

module.exports = {myDb}