This is to demonstrate how react makes code easier and readable by merging HTMl with JS.

import './App.css';

function App() {                              // This is called a component, a function which returns embedded HTML or UI stuff, unlike JS functions which return primitive data types or maybe noting at all
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
