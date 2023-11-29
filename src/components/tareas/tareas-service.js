let tareas =[
    {id:1,descripcion: 'Tarea 1'},
    {id:2,descripcion: 'Tarea 2'}
];

export const tareaVacia ={id:-1,descripcion: '', terminada:false}

export function getTareas(){
    return tareas;
}

export function getTarea(id){
    return tareas.find (t=>t.id===id)
}

export function agregarTarea(tarea){
    tareas.push(tarea)
}
export function eliminarTarea(tarea){
    tareas = tareas.filter((t) => t.id !== tarea.id);
}