
import './App.css';
import ApiAxios from './components/ApiAxios';

function App() {
  return (
    <div className="App">
     <h1>Rick & Morty</h1>
     <h4 className ="font-weight-light font-italic">Afficher des donneés via une API avec Axios</h4>
     <ApiAxios/>
    </div>
  );
}

export default App;
