import './App.css';
import CurrentWeather from './components/CurrentWeather';
import CurrentTime from './components/CurrentTime';

function App() {

  const city = "Bergen";

  return (
    <div className="App">
      <header className="App-header">
      <h1>{city}</h1>
      <CurrentTime city={city}/>
      <CurrentWeather city={city}/>
      
    

      </header>
    </div>
  );
}

export default App;
