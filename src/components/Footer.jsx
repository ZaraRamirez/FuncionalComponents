const styles = {
  Texto: {
    textAlign: 'center',
  }
}

const Footer = ({ Texto }) => {
  return (
    <>
        <h5 style={styles.Texto}>{Texto}</h5>
    </>
  )
}

export default Footer