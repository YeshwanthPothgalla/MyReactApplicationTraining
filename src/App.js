// import logo from './logo.svg';
import './App.css';
import Appcounter from './counter/Appcounter'
// import Buttons from './counter/Buttons';
import Display from './counter/Display';
import ToDoComponent from './ToDo/ToDoComponent';
import SimlpeCounter from './counter/SimpleCounter';

function App() {

  const styling = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "navy",
    marginBottom: "30px",
  }; 

  return (
    <div className="App">
     <p style={styling}>React Application Training</p>
     <hr>
     </hr>
     <Appcounter initialValue={3} label='Increement Counter' ></Appcounter>
     {/* <Appcounter initialValue={6} label='Decreement Counter'></Appcounter> */}
     <hr>
     </hr>
     {/* <Buttons></Buttons> */}
     <Display></Display>
     <SimlpeCounter></SimlpeCounter>
     <ToDoComponent></ToDoComponent>
    </div>
  );
}

export default App;
