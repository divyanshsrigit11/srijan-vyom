import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

// load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // allows to parse JSON bodies

// health check Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: "Srijan Vyom Server is running seamlessly." });
});

// db conn. and server start
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
});

// clerk auth : public route
app.get('/api/projects', (req, res) => {
    res.json({ message: "Public project list" });
});

// protected route: only logged-in users can submit
app.post('/api/projects', ClerkExpressRequireAuth(), (req, res) => {
    // req.auth.userId contains the unique Clerk ID
    res.status(201).json({ message: "Auth verified, ready for project data" });
});