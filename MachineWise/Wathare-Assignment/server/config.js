import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const uri =
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster.cz9iicw.mongodb.net/wathare-assignment?retryWrites=true&w=majority`;

    const { connection } = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //console.log(connection);

    if (connection) {
      console.log(`Connected to the Database: ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;


