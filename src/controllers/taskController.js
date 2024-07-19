import Task from '../models/taskModel.js'

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.json(tasks)
    } catch (error) {
        res.status(500).error(error.message);
    }
}

const createTask = async (req, res) => {
    const { title, description } = req.body;
    if(!title || !description ){
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
    const task = new Task({ title, description, date: new Date() })
    try {
        const newTask = await task.save();
        return res.status(201).json(newTask);
    } catch (error) {
        res.status(500).error(error.message);
    }
}

// Edit tasks
const editTask = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    try {
        if(!title || !description ){
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }
        const taskUpdate = await Task.findOneAndUpdate({_id: id}, {title: title, description: description}, {new: true})
        return res.status(200).json({
            status: 'success',
            message: 'Tarea actualizada',
            task: taskUpdate
        })
    } catch (error) {
        res.status(500).error(error.message);
    }
}
 
export  {
    getTasks,
    createTask,
    editTask
}