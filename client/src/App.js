
import './App.css';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header/>
      <TodoForm/>
      <Todos />
    </div>
  );
}

export default App;
