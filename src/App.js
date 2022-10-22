import React from "react";
import './App.css';
import Title from './components/Title';
import Panel from './components/Panel';
import Topic from './components/Topic';
function App() {
  

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  })
  console.log(data);
  return (
    
    <div className= "App">
      <Title />
      <p>{!data ? "loading...": data}</p>
      <Topic name = "Sports" />
        <p>
          <Panel name="Google" url="https://www.google.com" content = "something"/>
          <Panel name="Yahoo" url="https://www.yahoo.com" content = "something"/>
        </p>
    </div>
  );
}

export default App;
