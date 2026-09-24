import '../src/Style/Tarjeta.css'

export default function Tarjeta({ title, img, descripcion, color }) {
  return (
    <div className='CentraC'>
      <div className='Centrar' style={{ backgroundColor: color, padding: '20px', borderRadius: '12px', color: '#fff', marginBottom: '20px', width: '100%', maxWidth: '400px' }}>
        <div className='Orde' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}>
          
          <h3 style={{ margin: '0', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', width: '100%' }}>
            {title}
          </h3>
          
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img 
              src={img} 
              alt={title} 
              style={{ width: '160px', height: '160px', objectFit: 'contain' }} 
            />
          </div>

          <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', textAlign: 'justify', width: '100%' }}>
            {descripcion}
          </p>

        </div>
      </div>
    </div>
  )
}
