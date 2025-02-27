import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CheckBox from './components/CheckBox';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import ToggleText from './components/ToggleText';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragAndDropList from './components/DragAndDropList';
function App() {
  return (
    <div className="container mt-5">
      <Counter />
      <CheckBox />
      <ProductList />
      <ToggleText/>
      <TodoList/>
      <ColorSwitcher/>
      <SearchFilter/>
      <DragAndDropList/>
    </div>
  );
}

export default App;
