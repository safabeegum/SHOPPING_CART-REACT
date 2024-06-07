import logo from './logo.svg';
import './App.css';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import DeleteItem from './components/DeleteItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewItem from './components/ViewItem';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddItem/>}/>
      <Route path='/search' element={<SearchItem/>}/>
      <Route path='/delete' element={<DeleteItem/>}/>
      <Route path='/viewall' element={<ViewItem/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
