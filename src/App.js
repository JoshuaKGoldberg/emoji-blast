import './App.css';
import { HomeContianer } from './components/home-container/home-container';
import { NavBar } from './components/nav-bar/nav-bar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomeContianer></HomeContianer>
    </div>
  );
}

export default App;
