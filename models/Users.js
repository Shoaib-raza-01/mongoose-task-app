const { model, Schema } = require("mongoose");
const { encryptPassword, checkPassword } = require("../bcrypt");
const userRepository = require("../repositories/user-repository")

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    default: 0,
    required: true
  },
  password: {
    type: String,
    minlength: [6, 'Password must be at least 6 characters long'],
    maxlength: [128, 'Password cannot exceed more than 128 character'],
    required: true,
  }
});

UserSchema.pre("save" , async function(next){
  const user = this
  if (user.modifiedPaths().includes("password")){
    user.password = await encryptPassword(user.password)
  }
  next();
});


//we can create our own functions in mongoos using static 
// UserSchema.statics.functionName = ()>{}


//function to login user

UserSchema.statics.findByEmailPassForAuth = async (email,password) => {
  const user =await User.findOne({email})
  if(!user){
    throw Error('Invalid credentials,  check email') //throwing error for invalid credentails
  }
  const encryptPassword = user.password
  const isMatch = await checkPassword(password,encryptPassword)
  if(!isMatch){
    throw new Error("login failed... wrong password entered")
  }
  console.info("login success")
  return user
}
const User = model("User", UserSchema);

module.exports = User