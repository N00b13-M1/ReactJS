import logo from './logo.svg';
import './App.css';

function App() {
  let dateCourante = new Date();
  let tempsJavascript = dateCourante.getTime();
  let tempsPHP = tempsJavascript
  
  let day = dateCourante.getDate();
  let month = dateCourante.getMonth();
  let year = dateCourante.getFullYear();

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Temps Javascripts {tempsJavascript} millisecondes</p>
          <p>Temps PHP {tempsPHP/1000} millisecondes</p>
          <p>Today is {day}/{month+1}/{year} millisecondes</p>
        </header>
      </div>
      <footer>Molengeek TM</footer>
    </div>
  );
}

export default App;
