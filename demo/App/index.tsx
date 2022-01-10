import { useState } from "react";
// import useStylesheet from "../../src";

const App = () => {
  const [url, setUrl] = useState('');

  return <div className="target" style={{ width: "300px", height: "300px", margin: "auto" }}>
    <span>change style by inserting style sheet url: <input type="input" /><button>submit</button></span>
  </div>
}

export default App
