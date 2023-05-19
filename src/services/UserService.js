const BaseService = require("./BaseService");

class UserService extends BaseService {
    constructor(modelType){
        super(modelType)
    }
    async getUser(id){
        let userDetails = await this.get(id)
        delete userDetails.password;
        return userDetails
    }
}

module.exports = {
    getInst(modelType) {
        return new UserService(modelType);
    }
}