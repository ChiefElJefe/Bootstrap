const { Task } = require('./DataBase/database.js')
const bd = require('./DataBase/database.js')

document.getElementById('boton1').addEventListener('click', () => {
    let task = new bd.Task({
        nombre: document.getElementById('texto').value
    })

    task.save().then(resultado => {
        document.getElementById('lista').insertAdjacentHTML('beforeend', '<li class="list-group-item">' + document.getElementById("texto").value + '</li>')
        document.getElementById('texto').value = ''
    }).catch(error => {
        document.getElementById('texto').value = 'Error al añadir la tarea'
    })
})

let findallTasks = () => {
    bd.Task.find().then(result => {
        paintTask(result)
    }).catch(error => {
        console.log('ERROR en find')
    })
}

let paintTask = (tasks => {
    let cadenaDOM = ''
    for (let i = 0; i < tasks.length; i++) {
        cadenaDOM += '<li class="list-group-item">' + tasks[i].nombre + '</li>'
    }
    document.getElementById('lista').innerHTML = cadenaDOM
})

findallTasks()

document.getElementById('boton2').addEventListener('click', () => {
    let task = new bd.Task({
        nombre: document.getElementById('texto').value
    })

    task.save().then(resultado => {
        document.getElementById('lista').insertAdjacentHTML('beforeend', '<li class="list-group-item">' + document.getElementById("texto").value + '</li>')
        document.getElementById('texto').value = ''
    }).catch(error => {
        document.getElementById('texto').value = 'Error al añadir la tarea'
    })
})