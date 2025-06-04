const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ Підключено до MongoDB');
        app.listen(PORT, () => {
            console.log(`🚀 Сервер працює на http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error(err));
