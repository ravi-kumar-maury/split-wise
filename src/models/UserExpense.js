const { Entity } = require("../db/entity");
const _ = require('lodash')
class UserExpense extends Entity {
  constructor() {
    super('user_expenses')
  }
  async handleEachUserBalance(usersInGroup, paid_by, expense_id, equalAmount) {
    const findInQuery = 'SELECT id, amount_owe_by_friend FROM user_expenses WHERE user_id = $1 AND friend_id = $2';
    const insertQuery = `INSERT INTO user_expenses (user_id, friend_id, expense_id, amount_owe_by_friend)
        VALUES ($1, $2, $3, $4)`;
    for (const user of usersInGroup) {
      const values = [paid_by, user.id, expense_id, equalAmount];
      let result = await this.rawQuery(findInQuery, values.slice(0, 2));
      if (!_.isEmpty(result)) {
        let userExpenseId = result[0].id
        await this.update(userExpenseId, { amount_owe_by_friend: `${equalAmount + parseInt(result[0].amount_owe_by_friend)}` })
      }
      else {
        await this.rawQuery(insertQuery, values);
      }
    }
    await this.connection.query('COMMIT');
  }
  async createExpenseWithSplitTypeEqual(expense, expense_id) {
    try {
      const { amount, paid_by, group_id } = expense;

      // Retrieve the list of users in the group except for the user who paid the expense
      const usersInGroupQuery = 'SELECT id FROM users WHERE id <> $1 AND id IN (SELECT user_id FROM user_groups WHERE group_id = $2)';
      const usersInGroupValues = [paid_by, group_id];
      const usersInGroup = await this.rawQuery(usersInGroupQuery, usersInGroupValues);

      // Calculate the equal amount to be owed by each user
      const numUsers = usersInGroup.length + 1;
      const equalAmount = amount / numUsers;

      // Insert or update the owed amount for each user in the user_expenses table
      await this.handleEachUserBalance(usersInGroup, paid_by, expense_id, equalAmount)
      await this.connection.query('COMMIT');
    } catch (error) {
      await this.connection.query('ROLLBACK');
      throw error;
    }
  }
  async handleDirectPayment(expense, expense_id) {
    const { amount, paid_by, group_id, friend_id } = expense;
    // doing full payment
    await this.handleEachUserBalance([{ id: friend_id }], paid_by, expense_id, amount)

  }

}


module.exports = new UserExpense();