const expenseService = require('../src/services/ExpensesService');
const expenseServiceInst = expenseService.getInst('expenses');


const mockExpense = {
    description:"dubai trip",
    amount: '100.00',
    paid_by:19,
    group_id: 1,
    split_type:"equal"
}

describe('createExpense', () => {
    it('should create an expense and return the created expense', async () => {
      const createdExpense =  await expenseServiceInst.create(mockExpense);
      console.log(createdExpense)
      expect(createdExpense).toEqual(expect.objectContaining(mockExpense));
    });
  });
  
  // Unit tests for getExpense function
  describe('getExpense', () => {
    it('should return the expense with the given ID', async () => {
        const createdExpense = await expenseServiceInst.create(mockExpense);
        const expenseId = createdExpense.id;
  
      const retrievedExpense = await expenseServiceInst.get(expenseId);
  
      expect(retrievedExpense).toEqual(expect.objectContaining(createdExpense));
    });
  });
  
  // Unit tests for updateExpense function
  describe('updateExpense', () => {
    it('should update the expense with the given ID and return the updated expense',async () => {
        const createdExpense = await expenseServiceInst.create(mockExpense);
      const expenseId = createdExpense.id;
      const updatedExpenseData = { amount: '15.00' };
  
      const updatedExpense = await expenseServiceInst.update(expenseId, updatedExpenseData);
  
      expect(updatedExpense).toEqual(expect.objectContaining({ ...createdExpense, ...updatedExpenseData }));
    });
  
    it('should return null for a non-existing expense ID', async () => {
        let nonExistingId = 123
      const updatedExpense = await expenseServiceInst.update(nonExistingId, { amount: 20 });
  
      expect(updatedExpense).toBe(undefined);
    });
  });
  
  // Unit tests for deleteExpense function
  describe('deleteExpense', () => {
    it('should delete the expense with the given ID and return true', async () => {
        const createdExpense = await expenseServiceInst.create(mockExpense);
      const expenseId = createdExpense.id;
  
      const deleteResult = await expenseServiceInst.delete(expenseId);
  
      expect(deleteResult).toBe(true);
    });
  });
  