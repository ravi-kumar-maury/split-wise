const entity = require('../db/entity')();
class BaseService {
  constructor(model){
    this.model = model
  }
  async create(body){
    const resp = await entity.create(this.model , body);
    return resp;
 }
  async get(id){
  const resp = await entity.read(this.model , id);
  return resp;
}
  async update(id, body){
  const resp = await entity.update(this.model , id, body);
  return resp;
}
  async delete(id){
  const resp = await entity.delete(this.model , id);
  return resp;
}

}

module.exports = BaseService;
  