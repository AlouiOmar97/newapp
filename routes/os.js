var express = require('express');
var router = express.Router();
var os = require("os")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    'hostname': os.hostname(),
    'type': os.type(),
    'platform': os.platform()
  });
});

router.get('/cpus',(req,res,next)=>{
  res.json({'cpus':os.cpus()})
})

router.get('/cpus/:id',(req,res,next)=>{
  id=req.params.id
  cpus=os.cpus()
  res.json(cpus[id])
})

module.exports = router;
