import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import userRoutes from './routers/userRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// routing
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('desde index.js');
  console.log(`start server run in the port ${PORT}`);
});
