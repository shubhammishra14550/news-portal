import logo from './logo.svg';
import './App.css';
import Navigation from './componenets/navigation/Navigation';

export default function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <p>
          Work in progress for <code>News Bulletin &hearts;</code>.
        </p>
        <hr/><hr/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
