const styles = {
  img:{
      width: '350px',
      height: '250px',  
  }
}

const CardImage = ({ src }) => {
  return (
    <>
      <img src={src} alt="Cargando" style={styles.img}/>
    </>
  )
}

export default CardImage