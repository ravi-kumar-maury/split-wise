const UserService = require('../src/services/UserService');
const UserServiceInst = UserService.getInst('users');


const mockUser = {
    username:"ravik",
    email: "ravisuzerain@gmail.com",
    password: "1234"
}

describe('createUser', () => {
    it('should create an User and return the created User', async () => {
      const createdUser =  await UserServiceInst.create(mockUser);
      console.log(createdUser)
      expect(createdUser).toEqual(expect.objectContaining(mockUser));
    });
  });
  
  // Unit tests for getUser function
  describe('getUser', () => {
    it('should return the User with the given ID', async () => {
        const createdUser = await UserServiceInst.create(mockUser);
        const UserId = createdUser.id;
  
      const retrievedUser = await UserServiceInst.get(UserId);
  
      expect(retrievedUser).toEqual(expect.objectContaining(createdUser));
    });
  });
  
  // Unit tests for updateUser function
  describe('updateUser', () => {
    it('should update the User with the given ID and return the updated User',async () => {
        const createdUser = await UserServiceInst.create(mockUser);
      const UserId = createdUser.id;
      const updatedUserData = { username: 'rk1' };
  
      const updatedUser = await UserServiceInst.update(UserId, updatedUserData);
  
      expect(updatedUser).toEqual(expect.objectContaining({ ...createdUser, ...updatedUserData }));
    });
  
    it('should return null for a non-existing User ID', async () => {
        let nonExistingId = 123
      const updatedUser = await UserServiceInst.update(nonExistingId, { username: 'rk1' });
  
      expect(updatedUser).toBe(undefined);
    });
  });
  
  // Unit tests for deleteUser function
  describe('deleteUser', () => {
    it('should delete the User with the given ID and return true', async () => {
        const createdUser = await UserServiceInst.create(mockUser);
      const UserId = createdUser.id;
  
      const deleteResult = await UserServiceInst.delete(UserId);
  
      expect(deleteResult).toBe(true);
    });
  });
  