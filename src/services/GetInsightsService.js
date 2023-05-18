const BaseService = require("./BaseService");

class GetInsightsService extends BaseService {
    constructor(modelType){
        super(modelType)
    }
}

module.exports = {
    getInst(modelType) {
        return new GetInsightsService(modelType);
    }
}