import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handeClick = () => {
    if (name === "Mario") {
      setName("Luigi");
      setAge(30);
    } else {
      setName("Mario");
      setAge(25);
    }
  };
  
  // name is the Dependency, when name's state changes useEffect is fired.
  useEffect(() => {
    console.log("useEffect() called");
    console.log(name);
  }, [name]);

  return (
    <>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handeClick}>Click me</button>
    </>
  );
}

export default App;
