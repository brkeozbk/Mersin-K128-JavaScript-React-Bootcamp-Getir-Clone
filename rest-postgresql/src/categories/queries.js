const getCategories = "SELECT * FROM categories";
// const getCategories = "SELECT * FROM categories";
const getCategoriesById = "SELECT * FROM categories WHERE id=$1";
const checkcategorynameExists = "SELECT * FROM categories s WHERE s.categoryname=$1"
const addCategories = "INSERT INTO categories (categoryname, imgage ) VALUES ($1, $2,)";

module.exports = {
    getCategories,
    getCategoriesById,
    checkcategorynameExists,
    addCategories,
    // getCategories,
}