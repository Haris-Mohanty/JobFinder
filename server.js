//packages import
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';

//files import
import connectDb from './config/db.js';
import testRoutes from './routes/testRouts.js';


// Dot env Config
dotenv.config();

// MongoDB Connection
connectDb();


// Rest Object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



// Routes
app.use('/api/v1/test', testRoutes);


// port
const port = process.env.PORT || 8080;

// Listen
app.listen(port, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} mode on port ${port}`.bgMagenta.white);
});
