import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodo = [
  { text: 'Costar cebolla', completed: true},
  { text: 'Tomar el curso de instroduccion', completed: false},
  { text: 'Llorar con la llorona ', completed: false},
  { text: 'Patata', completed: false}

];

function App() {
  const [todos, setTodos] = React.useState(defaultTodo);
  const [searchValue, setSearchValue ] = React.useState('');

  const completedTodos= todos.filter(todo =>  todo.completed).length;
  const totalTodos = todos.length;

  return (
    // <React.Fragment> == <>
    <>
    
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        { defaultTodo.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      
      {<CreateTodoButton/>}
      </>
    //</React.Fragment> == </>
  );
}


export default App;
