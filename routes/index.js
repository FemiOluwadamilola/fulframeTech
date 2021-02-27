// const router = require('express').Router();
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
   res.render('page');
})

// router.post('/client_message',)
router.post('/msgFromClient', (req,res) => {
   console.log(req.body);
});

module.exports = router;
