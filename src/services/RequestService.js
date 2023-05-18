const entity = require('./../db/entity')();
class RequestService {

  async createUser(body){
    const resp = await entity.create('users' , body);
    return resp;
 }
  async getUser(id){
  const resp = await entity.read('users' , id);
  return resp;
}
  async updateUser(id, body){
  const resp = await entity.update('users' , id, body);
  return resp;
}
  async deleteUser(id){
  const resp = await entity.delete('users' , id);
  return resp;
}

}

module.exports = {
    getInst() {
      return new RequestService();
    },
  };
  