import Tarjeta from "../Pages/Orquestador/Tarjeta";
import Cafe from "../data.json";
import Boton from "../Componentes/Tarjetas/Boton";

export default function Tar() {
    return (
        <div style={{ padding: '20px' }}>
            {Cafe.map((chocolate) => (
                <Tarjeta
                    key={chocolate.id}
                    title={chocolate.title}
                    img={chocolate.img}
                    descripcion={chocolate.descripcion}
                    color={chocolate.color}
                />
            ))}
            <Boton />
        </div>
    )       
}
