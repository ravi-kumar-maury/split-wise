const express = require('express');
const router = express.Router();
const getInsightService = require('../services/GetInsightsService')
const getInsightInst = getInsightService.getInst('users');


// GET /api/getInsights/:groupId
router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    const user = await getInsightInst.get(id);
    res.status(200).json(user);
    } 
    catch(error){
        console.log('error occured', error);
        res.status(500).json({error: error.message});
    }
});



module.exports = router;
