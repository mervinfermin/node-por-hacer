const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea po hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion

    })
    .help()
    .argv;

// con esto configuramos nuesstro objeto argv pero para poder utilizarlo ybque trabaje necesitamos exportalo y par eso 
// usamos :

module.exports = {
    argv
}