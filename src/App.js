import './App.css';
import { Facebook } from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Auth</h1>
        <p>
          To get started, authenticate with Facebook
        </p>
        <Facebook></Facebook>
      </header>
    </div>
  );
}

export default App;
