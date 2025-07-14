const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("products router");
})

module.exports = router;
