const BaseService = require("./BaseService");
const userExpenseInst = require('../models/UserExpense')
const { splitEnum } = require('../config/splitEnum.json')
class ExpenseService extends BaseService {
    constructor(modelType){
        super(modelType)
    }
    async createExpenseAndUserExpense(expense){
        const result = await this.create(expense);
        // equal split
        if (expense.split_type == splitEnum.equal)
        await userExpenseInst.createExpenseWithSplitTypeEqual(expense, result.id)

    }
}

module.exports = {
    getInst(modelType) {
        return new ExpenseService(modelType);
    }
}