import express from 'express';
import { getTasks, createTask, editTask } from '../controllers/taskController.js';

const router = express.Router();

// GET all tasks
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

// Edit a task
router.put('/:id', editTask)

export default router;