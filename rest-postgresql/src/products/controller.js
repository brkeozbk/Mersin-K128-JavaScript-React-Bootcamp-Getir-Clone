const pool = require('../../db')
const queries = require("./queries")

const getProducts = (req,res)=>{
    pool.query(queries.getProducts,(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}
// const getCategories = (req,res)=>{
//     pool.query("SELECT * FROM categories",(error,results)=>{
//         if(error) throw error;
//         res.status(100).json(results.rows);
//     })
// }

const getProductsById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProductsById,[id], (error, results)=>{
        if (error) throw error; 
        res.status(200).json(results.rows);
    })
}
 const addProduct=(req,res)=>{
     const {categoryid, title, unitsinstock, unitprice, img} = req.body;
     pool.query(queries.checkImgExists,[img], (error,results)=>{
         if(results.rows.length){
             res.send("ayni resim")
         }

         //add
         pool.query(
             queries.addProduct,
             [categoryid, title, unitsinstock, unitprice,img],
             (error, results)=>{
                 if(error) throw error;
                 res.status(201).send("basarili");
             }

         );
     });
 }
module.exports = {
    getProducts,
    getProductsById,
    // getCategories,
    addProduct,
    
}

