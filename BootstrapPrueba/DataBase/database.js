const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/tareas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let tareasSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

let Task = mongoose.model('tarea', tareasSchema)

module.exports = {
    Task:Task
}