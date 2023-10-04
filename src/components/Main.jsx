import Card from "./Card";

const styles = {
  cards: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
  }
}

const Main = () => {
  return (
    <>
      <div style={styles.cards}>
        <Card src={"/Card1.png"} subtitulo={"Funciones en lugar de clases"} descripcion={"Los componentes funcionales son simplemente funciones de JavaScript en lugar de clases. Esto hace que su sintaxis sea más simple y fácil de entender en comparación con los componentes basados en clases. En lugar de extender una clase base, defines una función que toma props como argumento y devuelve un elemento React."} />
        <Card src={"/Card2.jpg"} subtitulo={"Hooks"} descripcion={"Los componentes funcionales pueden aprovechar los hooks de React, como useState, useEffect y useContext, entre otros. Los hooks permiten a los componentes funcionales gestionar el estado local, efectos secundarios y otros aspectos de la lógica del componente de una manera más sencilla y concisa que en las versiones anteriores de React."} />
        <Card src={"/Card3.png"} subtitulo={"Mayor legibilidad y reutilización de código"} descripcion={"Los componentes funcionales tienden a ser más legibles y concisos que sus contrapartes basadas en clases. Esto facilita la comprensión del código y su mantenimiento. Además, los componentes funcionales promueven la reutilización de lógica, ya que puedes extraer funciones personalizadas y reutilizables dentro de ellos y utilizarlas en múltiples componentes."}/>
      </div>
    </>
  )
}

export default Main