import { useState } from "react";

const OldHome = () => {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('luigi');
    setAge(30);
    console.log('Hello, ninjas');
  }

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={() => handleClick()}>Change name and age</button>
    </div>
  );
}
 
export default OldHome;