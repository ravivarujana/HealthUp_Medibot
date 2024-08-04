const path = require("path");
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const auth = require("../middleware/auth");
const bodyparser = require('body-parser');
const chatbot = require('../disorderdialogflow')


//CORS code
router.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

router.use(bodyparser.urlencoded({
  extended : false
}))

router.post('/',async(req,res)=>{

   let responses = await chatbot.textquery(req.body.MSG, req.body.parameters)
      let result = responses[0].queryResult;
    res.send({Reply : result.fulfillmentText});
    
   })

router.get('/',auth,(req,res)=>{
  res.sendFile(path.join(__dirname,'../public/index.html'),(err)=>{
      if(err){
          res.writeHead(404);
          res.end(" file not found");
      }
  });
})

module.exports = router
