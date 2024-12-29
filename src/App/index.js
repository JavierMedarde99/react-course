import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';

/*const defaultTodo = [
  { text: 'Costar cebolla', completed: true},
  { text: 'Tomar el curso de instroduccion', completed: false},
  { text: 'Llorar con la llorona ', completed: false},
  { text: 'Patata', completed: false}

];

localStorage.setItem('TODOS_V1',defaultTodo);
localStorage.removeItem('TODOS_V1');*/



function App() {

  const {item: todos, saveItem: saveTodos,loading,error} = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    todo => { return todo.text.toLowerCase().includes(searchValue.toLowerCase()) }
  )



  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    // <React.Fragment> == <>
    <AppUI 
    
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    loading={loading}
    error={error}/>
    //</React.Fragment> == </>
  );
}


export default App;
