import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <h3>{props.studentId}</h3>
        <h4>{props.name}</h4>
        <h5>{props.college}</h5>
      </header>
    </div>
  );
}

export default App;
