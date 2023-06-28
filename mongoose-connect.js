const { connect } =  require("mongoose");

const MONGO_DB_URL = "mongodb+srv://<username>:<password>@cluster0.oh3oz7r.mongodb.net";

const DATABASE_NAME = "task_app";

const myFunction = async () => {
  try{
    await connect(`${MONGO_DB_URL}/${DATABASE_NAME}`);
    console.log("Connection was successfull... ")
  }catch (err) {
    console.error(err);
  };
};

myFunction();

module.exports = {}
