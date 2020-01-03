import mongoose from 'mongoose'

const connection = {}

async function connectDb(){
  // this if is to use the existing connection IF there is one.
  if (connection.isConnected){
    console.log("Using exsting connection")
    return
  }
  //use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    // these remove warnings that show up. its a mongodb thing.. https://mongoosejs.com/docs/deprecations.html
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB connected")
  connection.isConnected = db.connections[0].readyState
}

export default connectDb