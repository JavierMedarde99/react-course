/*const estilos = {
  backgroundColor : 'red'
}*/
 import './TodoCounter.css'
function TodoCounter({total, completed}){
    return(
      <h1 /*style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px'
      }}*/  className='TodoCounter'>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }

export { TodoCounter }