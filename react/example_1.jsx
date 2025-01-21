This is to demonstrate how react makes code easier and readable by merging HTMl with JS.

import './App.css';

function App() {
  const name = <h1>Sujal</h1>;
  const age = <h1>21</h1>;
  const email = <h1>sujal@sujal.com</h1>;
  const person = 
  (<div>
      {name}
      {age}
      {email}
  </div>)
 
 return (
    
    <div className="App" style={{}}>
      <div>{person}</div>
      <div>{person}</div>
      <div>{person}</div>
      <div>{person}</div>
    </div>
  
);
}

export default App;
