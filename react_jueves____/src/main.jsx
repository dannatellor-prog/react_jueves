import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Componentes/Tarjeta'
import juegosPokemon from './data.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', padding: '20px' }}>
      {juegosPokemon.map((juego) => (
        <Tarjeta
          key={juego.id}
          title={juego.title}
          descripcion={juego.descripcion}
          img={juego.img}
          color={juego.color}
        />
      ))}
    </div>
  </StrictMode>,
)