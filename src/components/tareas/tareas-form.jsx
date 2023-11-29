import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { tareaVacia, getTarea, agregarTarea } from "./tareas-service"


export default function TareasForm(props) {
    const [tarea, setTarea] = useState({})
    const params = useParams();
    const idTarea = params.idTarea;
    const navigator = useNavigate()

    //este jups sirve para ejecutar codigo cuando una variable cambia de valor
    //lo que busco es que este codigo solo se ejecute una vez
    /* useEffect(() => {

        if (idTarea)
            setTarea(getTarea(idTarea))
        else
            setTarea(tareaVacia)

    }, []);*/







    function handleEditorChange(e) {
        setTarea({ ...tarea, [e.target.id]: e.target.value })
    }
    function handleCheckChange(e) {
        setTarea({ ...tarea, [e.target.id]: e.target.checked })
    }
    function aceptarEdicion(){
        agregarTarea(tarea);
        navigator("/tareas")
    }
    return (
        <div className="container">
            <b>Id Tarea:</b>{params.idTareas}
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <input className="form-control" type="text" id="descripcion"
                    value={tarea.descripcion} onChange={handleEditorChange} />
            </div>
            <div className="mb-3">

                <input className="form-check-input" type="checkbox" id="terminada"
                    checked={tarea.terminada} onChange={handleCheckChange} />
                <label htmlFor="terminada" className="form-check-label ms-2">Terminada</label>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={() => navigator(-1)}>Cancelar</button>
                <button className="btn btn-primary ms-1" onClick={() => aceptarEdicion(tarea)} >Aceptar</button>
            </div>
        </div>
    )
}