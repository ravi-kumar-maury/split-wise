const express = require('express');
const router = express.Router();
const groupService = require('../services/GroupService')
const groupServiceInst = groupService.getInst('groups');
const userService = require('../services/UserService')
const userServiceInst = userService.getInst('users');



// POST /api/groups
router.post('/', async (req, res) => {
    try {
        const group = await groupServiceInst.create(req.body);
        res.status(201).json(group);
        } 
        catch(error){
            console.log('error occured', error);
            res.status(500).json({error: "INTERNAL_ERROR"});
        }
});

// GET /api/groups/:id
router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const group = await groupServiceInst.get(id);
        res.status(201).json(group);
        } 
        catch(error){
            console.log('error occured', error);
            res.status(500).json({error: error.message});
        }
});

// PUT /api/groups/:id
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const group = await groupServiceInst.update(id , req.body);
        res.status(201).json(group);
        } 
        catch(error){
            console.log('error occured', error);
            res.status(500).json({error: "INTERNAL_ERROR"});
        }
});

// DELETE /api/groups/:id
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const user = await groupServiceInst.delete(id);
        res.status(200).json(user);
        } 
        catch(error){
            console.log('error occured', error);
            res.status(500).json({error: error.message});
        }
});

router.post('/:id/members', async (req, res) => {
    const groupId = req.params.id;
    const memberId = req.body.id;
    const group = await groupServiceInst.get(groupId);
    const member = await userServiceInst.get(memberId);
    if (!group) {
      res.status(404).json({ error: 'Group not found' });
    } else if (!member) {
      res.status(404).json({ error: 'Member not found' });
    } else {
       await groupServiceInst.addMember({user_id: member.id, group_id:group.id});
      res.status(201).json(group);
    }
  });

module.exports = router;
