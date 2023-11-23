var express = require('express');
var router = express.Router();
var products = require('../data/products.json')

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.json(products)
});

router.get('/list/:id', function(req, res, next) {
  res.json(products[req.params.id])
});
router.get('/add/:id',function(req, res, next) {
  res.write('<p>add prodcut with id: '+ req.params.id +'</p>');
  if(req.params.id==0){
    next()
  }else{
    next("route")
  }
},function(req, res, next) {
  
  res.write("<p>next called</p>")
  next()
 // res.end();
},function(req, res, next) {
  res.write("next called 2")
  res.end();
});

router.get('/add/:id',(req,res,next)=>{
  res.write("This is the next('route')")
  res.end()
})
// http://localhost:3000/products/MACBOOKPRO/20


router.get('/instock/:qt',(req,res,next)=>{
  qt=req.params.qt
  var filtered_products=[];
  for(id in products){
    console.log(id);
    if(products[id].stock >= qt){ 
      console.log(products[id]);
      filtered_products.push(products[id])
    }
  }
  res.json(filtered_products)    
})

module.exports = router;
