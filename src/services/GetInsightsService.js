const BaseService = require("./BaseService");
const getInsightsInst = require('../models/GetInsights')

class GetInsightsService extends BaseService {
    constructor(modelType){
        super(modelType)
    }
    async getInsights(group_id){
      return await getInsightsInst.getGroupInsights(group_id);
    }
}

module.exports = {
    getInst(modelType) {
        return new GetInsightsService(modelType);
    }
}