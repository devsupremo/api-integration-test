import consola from 'consola';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(consola.success('Mongo connection Success'))
  .catch((error) => consola.error(error));

const database = mongoose.connection;

export default database;
