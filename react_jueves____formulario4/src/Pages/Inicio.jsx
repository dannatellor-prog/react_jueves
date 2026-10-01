import ABC from "../asset/images.jfif"
import Efecto from "../Componentes/Home/Efecto"
import { useNavigate } from "react-router-dom"

export default function Inicio(){
    const llevame=useNavigate()
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <h1>Bienvenidos</h1>
            <Efecto 
                src={ABC}
                onFin={()=>llevame("/Tarjetas")}
            />
        </div>
    )
}