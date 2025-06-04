const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

exports.addTodo = async (req, res) => {
    const newTodo = new Todo({ text: req.body.text });
    await newTodo.save();
    res.status(201).json(newTodo);
};

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { completed },
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: 'Update failed', error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Deletion failed', error: err.message });
    }
};
