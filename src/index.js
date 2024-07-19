import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/dbConfig.js'
import swaggerDocs from './swagger.js';

import taskRoutes from './routes/tasksRoutes.js'

dotenv.config();
const app = express();

app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.use('/tasks', taskRoutes)

// Swagger documentation
swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;