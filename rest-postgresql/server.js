const express = require("express")
require('dotenv').config();
const productRoutes = require("./src/products/routes")
const categoryRoutes = require("./src/categories/routes")

const app = express(); 
const port = 3004;

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hello World!");
});

app.use("/api/v1/products", productRoutes)
app.use("/api/v1/categories",categoryRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`))
