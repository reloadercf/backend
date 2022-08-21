import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI,
    );
    console.log(connection.connection.host);
  } catch (error) {
    console.log(`error bro: ${error.message}`);
    process.exit(1);
  }
};
export default conectarDB;
