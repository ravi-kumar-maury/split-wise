const BaseService = require("./BaseService");
const userGroupInst = require('../db/entity')('user_groups')
class GroupService extends BaseService {
    constructor(modelType){
        super(modelType)
    }
    async addMember(detail){
        await userGroupInst.create(detail);
    }
}

module.exports = {
    getInst(modelType) {
        return new GroupService(modelType);
    }
}