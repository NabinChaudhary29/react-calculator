import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
            <input id="inputField" readonly/>
            <input  id="calculateField" readonly/>
        </div>
        <div className="buttons">
            <button className="operatorgrey" onclick="clearGar()">AC</button>
            <button className="operatorgrey" onclick="">±</button>
            <button className="operatorgrey" onclick="displayGar('%')">%</button>
            <button className="operator" onclick="displayGar('/')">÷</button>
            <button onclick="displayGar('7')">7</button>
            <button onclick="displayGar('8')">8</button>
            <button onclick="displayGar('9')">9</button>
            <button className="operator" onclick="displayGar('*')">x</button>
            <button onclick="displayGar('4')">4</button>
            <button onclick="displayGar('5')">5</button>
            <button onclick="displayGar('6')">6</button>
            <button className="operator" onclick="displayGar('-')">-</button>
            <button onclick="displayGar('1')">1</button>
            <button onclick="displayGar('2')">2</button>
            <button onclick="displayGar('3')">3</button>
            <button className="operator" onclick="displayGar('+')">+</button>
            <button className="zero" onclick="displayGar('0')">0</button>
            
            <button onclick="displayGar('.')">.</button>
            <button className="operator" onclick="calculateGar('=')">=</button>
        </div>
    </div>
    </div>
  );
}

export default App;
