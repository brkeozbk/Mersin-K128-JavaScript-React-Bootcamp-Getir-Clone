const db = require('./data/db-config');

const findAll = () => {
    return db('categories')
}

module.exports = {
    findAll
}