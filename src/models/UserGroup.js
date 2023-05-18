const {Entity} = require('../db/entity');

class UserGroup extends Entity {
    constructor(){
     super('user_groups')
    }
}
module.exports = UserGroup;