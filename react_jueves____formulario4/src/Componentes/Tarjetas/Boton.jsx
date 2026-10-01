import { Link } from 'react-router-dom'
import B from "../../asset/images.jfif"

export default function Boton() {
    return(
        <Link to="Formulario">
            <img src={B} alt="" />
        </Link>
    )
}