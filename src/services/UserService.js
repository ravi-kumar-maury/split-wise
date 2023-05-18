const BaseService = require("./BaseService");

class UserService extends BaseService {
    constructor(modelType){
        super(modelType)
    }
}

module.exports = {
    getInst(modelType) {
        return new UserService(modelType);
    }
}