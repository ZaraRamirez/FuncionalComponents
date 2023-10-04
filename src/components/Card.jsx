import CardImage from './CardImage'
import CardBody from './CardBody'

const styles = {
  card: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  Image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
  }
}

const Card = ({ src, subtitulo, descripcion}) => {
  return (
    <>
      <div style={styles.card}>
        <div style={styles.Image}>
          <CardImage src={src}/>
        </div>
        <CardBody subtitulo={subtitulo} descripcion={descripcion} />
      </div>
    </>
  )
}

export default Card