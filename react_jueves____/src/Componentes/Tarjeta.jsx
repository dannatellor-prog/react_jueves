import '../Style/Tarjeta.css'

export default function Tarjeta({ title, descripcion, img, color }) {
  return (
    <div className='CentraC'>
      <div className='Centrar' style={{ backgroundColor: color }}>
        <img src={img} alt={title} />
        <div className='Orde'>
          <h1>{title}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  )
}