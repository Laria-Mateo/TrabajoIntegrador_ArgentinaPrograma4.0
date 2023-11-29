import DivTasks from "../divTasks/divTasks"
import { getTareas } from "./tareas-service"
export default function TareasLista(props) {
    return (

    <DivTasks tareas={getTareas()}/>

    )
}