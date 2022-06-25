import React from 'react';

let name: String;
let age: string | number;
// let classs : unknown;

name = 'johns';
age = 5;

type Point = {
  x: number,
  y: number
};

const pt: Point = {x:5, y:6};
console.log(pt)

interface Point3d  {
  x: number,
  y: number
}

// extensiin insnt possible when you use type
interface Point3d {
  z: number;
}

const rect : Point3d ={x:5, y:7, z:3}
console.log(rect)



console.log(name, age)

function App() {
  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
