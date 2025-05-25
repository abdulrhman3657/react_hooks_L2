import { useState } from "react";

function HooksTest() {
  const [color, setColor] = useState("white ");

  const redbg = () => {
    setColor("red");
  }

  const bluebg = () => {
    setColor("blue");
  }

  const greenbg = () => {
    setColor("green");
  }

  const yellowbg = () => {
    setColor("yellow");
  }

  return (
    <div className="h-screen flex justify-start gap-3 p-10" style={{background:color}}>
      <button className="border self-start p-3 w-20 bg-gray-300 rounded-xl" onClick={() => redbg()}>red</button>
      <button className="border self-start p-3 w-20 bg-gray-300 rounded-xl" onClick={() => bluebg()}>blue</button>
      <button className="border self-start p-3 w-20 bg-gray-300 rounded-xl" onClick={() => greenbg()}>green</button>
      <button className="border self-start p-3 w-20 bg-gray-300 rounded-xl" onClick={() => yellowbg()}>yellow</button>
    </div>
  );
}

export default HooksTest;
