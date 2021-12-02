const express=require('express');
const router=express.Router();
const Product =require('../models/product');


//get all the products from database
router.get('/products',async(req,res)=>{

    const products = await Product.find({});
    res.render('products/index',{products});
})

//get the new form to create new product
router.get('/products/new',(req,res)=>{
    res.render('products/new');
})

//create new product with given payload
router.post('/products',async(req,res)=>{
    const newProduct = {
        ...req.body
    }

    await Product.create(newProduct);

    res.redirect('/products');
})

//show particular product
router.get('/products/:id',async(req,res)=>{
    const {id}=req.params;

    const product =await Product.findById(id);

    res.render('products/show',{product});
});

//getting the edit form prefilled with the data
router.get('/products/:id/edit',async(req,res)=>{
    const {id}=req.params;

   const product= await Product.findById(id);

    res.render('products/edit',{product});
});

//updating the product 
router.patch('/products/:id',async(req,res)=>{
    
    const {id}=req.params;
    const updatedProduct=req.body;

    await Product.findByIdAndUpdate(id,updatedProduct);

    res.redirect(`/products/${id}`);
});

router.delete('/products/:id',async(req,res)=>{
    const {id}=req.params;

    await Product.findByIdAndDelete(id);

    res.redirect('/products');
});

module.exports=router;