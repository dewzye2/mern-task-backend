const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true); // remover a mensagem no console!
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}; 

module.exports = connectDB

// second method to connect to mongodb (in server.js)
// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//       app.listen(PORT, () => {
//         console.log(`Server Running on port ${PORT}`);
//       });
//     })
//     .catch((err) => console.log(err))
