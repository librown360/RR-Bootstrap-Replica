import './App.css';
import BackgroundImage from './components/BackgroundImage';
import StoreListing from './components/StoreListing';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListing />
    </div>
  );
}

export default App;
