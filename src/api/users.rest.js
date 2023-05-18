const express = require('express');
const router = express.Router();
const userService = require('../services/UserService')
const userServiceInst = userService.getInst('users');



  // GET /api/users/:id
  router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    const user = await userServiceInst.get(id);
    res.status(201).json(user);
    } 
    catch(error){
        console.log('error occured', error);
        res.status(500).json({error: error.message});
    }
  });

  // POST /api/users
  router.post('/', async (req, res) => {
    try {
    const user = await userServiceInst.create(req.body);
    res.status(201).json(user);
    } 
    catch(error){
        console.log('error occured', error);
        res.status(500).json({error: "INTERNAL_ERROR"});
    }
  });

  // PUT /api/users/:id
  router.put('/:id', async (req, res) => {
    try {
      let id = req.params.id;
      const user = await userServiceInst.update(id, req.body);
      res.status(201).json(user);
      } 
      catch(error){
          console.log('error occured', error);
          res.status(500).json({error: error.message});
      }
  });

  // DELETE /api/users/:id
  router.delete('/:id', async (req, res) => {
    try {
      let id = req.params.id;
      const user = await userServiceInst.delete(id);
      res.status(200).json(user);
      } 
      catch(error){
          console.log('error occured', error);
          res.status(500).json({error: error.message});
      }
  });



module.exports = router;
