import '../Style/Tarjeta.css'

export default function Tarjeta({ title, input, color }) {
  return (
    <div className='CentraC'>
      <div className='Centrar' style={{ backgroundColor: color, padding: '15px', borderRadius: '8px' }}>
        <div className='Orde' style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
          <label style={{ color: color, fontWeight: 'bold' }}>{title}</label>
          <input 
            type={title === "Edad" ? "number" : "text"} 
            defaultValue={input} 
            placeholder={`Introduce tu ${title.toLowerCase()}...`}
            style={{ padding: '8px', borderRadius: '4px', border: `1px solid ${color}` }}
          />
        </div>
      </div>
    </div>
  )
}
