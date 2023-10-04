const styles = {
  Titulo: {
    textAlign: 'center',
  }
}


const Header = ({ Titulo }) => {
  return (
    <>
      <h1 style={styles.Titulo}>{Titulo}</h1>
    </>
  )
}

export default Header