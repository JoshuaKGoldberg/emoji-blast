import './App.css';
import { SideBar } from './components/side-bar/side-bar';
import { ExplosionContainer } from './components/explosion-container/explosion-container';

function App() {
  return (
    <div className="App">
      <ExplosionContainer></ExplosionContainer>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
