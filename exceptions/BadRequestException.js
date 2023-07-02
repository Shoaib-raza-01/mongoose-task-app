
class BadRequestException extends Error{
  constructor(entityName , message){
    this.message = message;
    this.entityName = entityName
  }
}


module.exports = BadRequestException