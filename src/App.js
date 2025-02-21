import logo from "./logo.svg";
import "./App.css";
import { AppBar, Button } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ResponsiveAppBar />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">TEST</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
