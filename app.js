require("./mongoose-connect")
const express = require("express");
const userRoute = require("./routes/user-router")
const app = express();

app.use(express.json());
app.use("/user", userRoute)

const PORT = 8080;
// function myfunc(){
// // app.post("/add-user", async (req, res) => {
// //   try {
// //     const { name, email, age, password } = req.body;
// //     const user = new User({ name, email, age, password });
// //     await user.save()
// //     console.log("user was added successfully....");
// //     return res.status(201).send(user);
// //   } catch (err) {
// //     res.status(404).send({ message: err })
// //   }
// // });

// // app.get("/get-user", async (req, res) => {

// //   //directly use sql operations

// //   // const user = await User.findOne(
// //   //   { age: 24 }
// //   // );
// //   // if (!user) {
// //   //   return res.status(404).send({ message: "user was not found " });
// //   // } else {
// //   //   return res.status(200).send(user)
// //   // }

// //   try {
// //     const user = await User.findOne({ age: 24 });
// //     console.log("user with age 24 was found");
// //     return res.status(201).send(user);
// //   } catch (err) {
// //     return res.status(404).send({ message: err });
// //   }
// // });

// // app.put("/update-user/:id", async (req, res) => {
// //   try {
// //     const toUpdate = req.body
// //     const { id } = req.params
// //     const updateObject = {}
// //     for (let fields of EDITALE_USER_FIELDS) {
// //       if (toUpdate[fields]) {
// //         updateObject[fields] = toUpdate[fields];
// //       }
// //     }
// //     if (Object.keys(updateObject).length) {
// //       const updateResult = await User.updateOne(
// //         { _id: id },
// //         { $set: updateObject }
// //       );
// //       if (updateResult.matchedCount) {
// //         return res.status(200).send({ messge: "Update was successful" })
// //       }
// //       console.error("update failed");
// //       return res.status(404).send({ message: "update failed........" });
// //     } else {
// //       return res.status(400).send({ message: "Please use valid fields to update" })
// //     }
// //   } catch (err) {
// //     return res.status(503).send({ message: "server error" });
// //   }
// // });

// // app.delete("/delete-user/:id", async (req,res) => {
// //   try{
// //     const { id } = req.params;
// //     const deleteUser = await User.deleteOne(
// //       {_id : id}
// //     );
// //     if(deleteUser.deletedCount){
// //       return res.status(200).send({message:'Record deleted successfully'});
// //     }
// //     return res.status(400).send({message : "deletion has be failed...."})
// //   }catch(err){
// //     console.error('Error in deleting the record')
// //   }
// // });
// }

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})