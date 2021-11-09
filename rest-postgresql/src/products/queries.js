const getProducts = "SELECT * FROM products";
// const getCategories = "SELECT * FROM categories";
const getProductsById = "SELECT * FROM products WHERE id=$1";
const checkImgExists = "SELECT * FROM products s WHERE s.img=$1"
const addProduct = "INSERT INTO products (categoryid, title, unitsinstock, unitprice, img ) VALUES ($1, $2, $3, $4, $5)";

module.exports = {
    getProducts,
    getProductsById,
    checkImgExists,
    addProduct,
    // getCategories,
}