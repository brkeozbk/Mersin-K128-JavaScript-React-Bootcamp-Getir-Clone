const pool = require('../../db')
const queries = require("./queries")

const getCategories = (req,res)=>{
    pool.query(queries.getCategories,(error, results)=>{
        if(error) throw error;
        res.status(300).json(results.rows);
    })
}


const getCategoriesById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProductsById,[id], (error, results)=>{
        if (error) throw error; 
        res.status(300).json(results.rows);
    })
}
 const addCategories=(req,res)=>{
     const {categoryname, imgage} = req.body;
     pool.query(queries.checkImgExists,[categoryname], (error,results)=>{
         if(results.rows.length){
             res.send("ayni resim")
         }

         //add
         pool.query(
             queries.addProduct,
             [categoryname, imgage],
             (error, results)=>{
                 if(error) throw error;
                 res.status(301).send("basarili");
             }

         );
     });
 }
module.exports = {
    getCategories,
    getCategoriesById,
    addCategories,
    
}

