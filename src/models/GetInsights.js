const {Entity} = require('../db/entity');
const  calculateSimplifiedPayments  = require('./../utils/simplifiedPayments')
const _ = require('lodash')
class GetInsights extends Entity {
    constructor(){
     super('UserExpense')
    }
    async getGroupInsights(groupId){
        try {
            // Retrieve the group information
            let pool = this.connection;
            const groupQuery = 'SELECT * FROM "groups" WHERE id = $1';
            const groupValues = [groupId];
            const { rows: groupRows } = await pool.query(groupQuery, groupValues);
        
            // Retrieve the expenses for the group
            const expensesQuery = 'SELECT * FROM expenses WHERE group_id = $1';
            const expensesValues = [groupId];
            const { rows: expensesRows } = await pool.query(expensesQuery, expensesValues);
        
            // Retrieve the user_expenses for the group
            const userExpensesQuery = `
              SELECT ue.user_id, u.username, ue.amount_owe_by_friend, ue.friend_id
              FROM user_expenses ue
              JOIN "users" u ON u.id = ue.user_id
              WHERE ue.expense_id IN (SELECT id FROM expenses WHERE group_id = $1)
            `;
            const userExpensesValues = [groupId];
            const { rows: userExpensesRows } = await pool.query(userExpensesQuery, userExpensesValues);
        
            // Calculate the total expenses for the group
            const totalExpenses = expensesRows.reduce((total, expense) => total + parseFloat(expense.amount), 0);
        
            // Calculate the balances for each user in the group
            const insight = calculateSimplifiedPayments(userExpensesRows)
            const parsedInsight  =  _.map(insight, (each)=>{
                 return  { ...each, amount_owe_by_friend : parseFloat(each.amount_owe_by_friend).toFixed(2)};
            })
           
            // Prepare the response object
            const insights = {
              group: groupRows[0],
              totalExpenses,
              parsedInsight,
            };
        
            return insights;
          } catch (error) {
            console.error('Error retrieving group insights:', error);
            throw error;
          }
    }
}
module.exports = new GetInsights();