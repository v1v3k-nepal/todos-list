import './App.css';
import { LocalStorageTodoWrapper } from './components/LocalStorageTodoWrapper';
// import TodoWrapper from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
        {/* <TodoWrapper/> */}
        <LocalStorageTodoWrapper/>
    </div>
  );
}

export default App;
