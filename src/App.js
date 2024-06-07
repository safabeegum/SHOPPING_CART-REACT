import logo from './logo.svg';
import './App.css';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import DeleteItem from './components/DeleteItem';

function App() {
  return (
    <div>
      <AddItem/>
      <SearchItem/>
      <DeleteItem/>
    </div>
  );
}

export default App;
