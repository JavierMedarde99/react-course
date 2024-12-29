
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){

    return(
      <input placeholder="Cortar cebolla" className="TodoSearch" value={searchValue}
      onChange={(event)=> {
        setSearchValue(event.target.value)
        /*console.log("escribir");
        console.log(event.target);
        console.log(event.target.value);*/
      }}/>
    );
  }

export { TodoSearch }