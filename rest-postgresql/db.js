const Pool = require('pg').Pool;
const pool = new Pool({
    user:process.env.POSTGRESQL_USERNAME,
    host:"localhost",
    database:"products",
    password:process.env.POSTGRESQL_PASSWORD,
    port: 5300,
});
module.exports = pool;
