import { useNavigate } from "react-router-dom";

export default function Formulario() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: "20px" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
                <label>Título: <input type="text" placeholder="Título de la tarjeta" /></label>
                <label>Imagen: <input type="text" placeholder="Imagen" /></label>
                <label>Descripción: <input type="text" placeholder="Descripción" /></label>
                <label>Color: <input type="text" placeholder="Color" /></label>
                
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <button type="submit">Enviar</button>
                    <button type="button" onClick={() => navigate("/")}>Volver</button>
                </div>
            </form>
        </div>
    );
}
