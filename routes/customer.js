const express = require("express");
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({success: "true", message:"customer detail"})
})

router.post('/login',(req,res) => {
    res.status(200).json({success: "true", message:"login page"})
})

module.exports = router;