// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div class="container">
        <h1 class="title">vent to me</h1>
        <textarea name="textarea" id="txtarea" cols="80" rows="10"></textarea>
        <div class="btn">
            <button class = "submit" type="submit">submit</button>
        </div>

    </div>
  );
}

export default App;
