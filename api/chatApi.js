const express = require("express");

const reviews = require("../models/reviews");

const {handleRequestedPrompt} = require("../controllers/chat")

const router = express.Router();

router.post("/chat",handleRequestedPrompt);

router.get("/getRandomReviews",async (req,res)=>{
    
    try {
        const randomReviews = await reviews.aggregate([
          { $sample: { size: 10 } }
        ]);

        res.json(randomReviews)
      } catch (error) {
        console.error('Error fetching random data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})



module.exports  = router;
