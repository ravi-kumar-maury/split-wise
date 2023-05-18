const { Entity }  = require('../db/entity');
class BaseService {
  constructor(model){
    this.model = model
  }
  async create(body){
    const entity = new Entity(this.model);
    const resp = await entity.create(body);
    return resp;
 }
  async get(id){
  const entity = new Entity(this.model);
  const resp = await entity.read(id);
  return resp;
}
  async update(id, body){
  const entity = new Entity(this.model);
  const resp = await entity.update(id, body);
  return resp;
}
  async delete(id){
  const entity = new Entity(this.model);
  const resp = await entity.delete(id);
  return resp;
}

}

module.exports = BaseService;
  