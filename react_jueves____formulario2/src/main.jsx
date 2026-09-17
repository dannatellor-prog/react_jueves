import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Componentes/Tarjeta'
import camposFormulario from './data.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', padding: '20px' }}>
      {camposFormulario.map((campo) => (
        <Tarjeta
          key={campo.id}
          title={campo.title}
          input={campo.input}
          color={campo.color}
        />
      ))}
    </div>
  </StrictMode>,
)
