const GroupService = require('../src/services/GroupService');
const GroupServiceInst = GroupService.getInst('groups');


const mockGroup = {
        group_name:"Brunch2",
        created_by:19
}

describe('createGroup', () => {
    it('should create an Group and return the created Group', async () => {
      const createdGroup =  await GroupServiceInst.create(mockGroup);
      console.log(createdGroup)
      expect(createdGroup).toEqual(expect.objectContaining(mockGroup));
    });
  });
  
  // Unit tests for getGroup function
  describe('getGroup', () => {
    it('should return the Group with the given ID', async () => {
        const createdGroup = await GroupServiceInst.create(mockGroup);
        const GroupId = createdGroup.id;
  
      const retrievedGroup = await GroupServiceInst.get(GroupId);
  
      expect(retrievedGroup).toEqual(expect.objectContaining(createdGroup));
    });
  });
  
  // Unit tests for updateGroup function
  describe('updateGroup', () => {
    it('should update the Group with the given ID and return the updated Group',async () => {
        const createdGroup = await GroupServiceInst.create(mockGroup);
      const GroupId = createdGroup.id;
      const updatedGroupData = { group_name: 'rk1' };
  
      const updatedGroup = await GroupServiceInst.update(GroupId, updatedGroupData);
  
      expect(updatedGroup).toEqual(expect.objectContaining({ ...createdGroup, ...updatedGroupData }));
    });
  
    it('should return null for a non-existing Group ID', async () => {
        let nonExistingId = 123
      const updatedGroup = await GroupServiceInst.update(nonExistingId, { group_name: 'rk1' });
  
      expect(updatedGroup).toBe(undefined);
    });
  });
  
  // Unit tests for deleteGroup function
  describe('deleteGroup', () => {
    it('should delete the Group with the given ID and return true', async () => {
        const createdGroup = await GroupServiceInst.create(mockGroup);
      const GroupId = createdGroup.id;
  
      const deleteResult = await GroupServiceInst.delete(GroupId);
  
      expect(deleteResult).toBe(true);
    });
  });
  