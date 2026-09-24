import Tar from "./Tar";
import Formulario from "../Pages/Orquestador/Formulario";
import Inicio from "./inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tar />} /> 
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Formulario" element={<Formulario />} />
            </Routes>
        </BrowserRouter>
    )
}
