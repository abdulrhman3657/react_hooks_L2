import { useState } from "react";

function HooksTest() {
  const [color, setColor] = useState("bg-white");

  const redbg = () => {
    setColor("bg-red-500");
  }

  const bluebg = () => {
    setColor("bg-blue-500");
  }

  const greenbg = () => {
    setColor("bg-green-500");
  }

  const yellowbg = () => {
    setColor("bg-yellow-500");
  }

  // className="h-screen flex justify-start gap-3 p-10"
  return (
    <div className={color}>
      <div className="h-screen flex justify-start gap-3 p-10">
      <button className="self-start p-3 w-20 bg-gray-300 hover:bg-gray-900 hover:text-white rounded-xl" onClick={() => redbg()}>red</button>
      <button className="self-start p-3 w-20 bg-gray-300 hover:bg-gray-900 hover:text-white rounded-xl" onClick={() => bluebg()}>blue</button>
      <button className="self-start p-3 w-20 bg-gray-300 hover:bg-gray-900 hover:text-white rounded-xl" onClick={() => greenbg()}>green</button>
      <button className="self-start p-3 w-20 bg-gray-300 hover:bg-gray-900 hover:text-white rounded-xl" onClick={() => yellowbg()}>yellow</button>
      </div>
    </div>
  );
}

export default HooksTest;
