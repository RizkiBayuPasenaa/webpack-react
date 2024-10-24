import { useState } from "react";

// const Perkenalan = (props) => {
//   let counter = 0
//   function handleClick() {
//     counter++
//     console.log(counter)
//   }

//   return (
//     <div>
//         <h4>{props.nama}</h4>
//         <p>{props.deskripsi}</p>
//         <button onClick={handleClick}>click me</button>
//     </div>
//   );
// };

// export default Perkenalan;
let context = "mikut ke render ga ya"

const MyComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  const ganjilAtauGenap = counter % 2 !== 0 ? "Ganjil" : "Genap";
  const className = counter % 2 !== 0 ? "ganjil" : "genap";

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h3 className={className}>{ganjilAtauGenap}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;


  