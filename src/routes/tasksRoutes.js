import express from 'express';
import { getTasks, createTask } from '../controllers/taskController.js';

const router = express.Router();

// GET all tasks
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

export default router;