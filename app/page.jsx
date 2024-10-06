"use client"
import { useState } from "react";


export default function Home() {
  const[value,setvalue] = useState(0);
  const[start,setStart] = useState(1);
  const[stop,setStop] = useState(63);
  const generateNumber = ()=>{
    const min = Math.ceil(start);  // Ensures the start range is inclusive
    const max = Math.floor(stop);  // Ensures the stop range is inclusive
    let n =  Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(n);
    setStart(start)
    setStop(stop)
    setvalue(n)
  }
  
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)]">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white">Department of Information Technology</h1>
    <h1 className="text-4xl my-4 font-bold text-white">AutoRoll: Instant Roll Number Creator</h1>
    <div className="mt-6 text-lg text-white">
      Click Button to Generate Random Roll Number
      <div className="flex flex-col sm:flex-row justify-center mt-4">
      <label className="block text-lg font-medium text-white mb-2">Start Range</label>
        <input
          className="px-4 py-3 my-2 sm:my-0 sm:mx-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
          type="text"
          value={start}
          onChange={(e)=>{setStart(Number(e.target.value)); console.log(e.target.value)}}
          placeholder="Enter the start Range"
        />
        <label className="block text-lg font-medium text-white mb-2">Stop Range</label>
        <input
          className="px-4 py-3 my-2 sm:my-0 sm:mx-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
          type="text"
          value={stop}
          onChange={(e)=>{setStop(Number(e.target.value)); console.log(e.target.value)}}
          placeholder="Enter the stop Range"
        />
      </div>
      <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-md shadow-lg hover:bg-pink-700 transition-all duration-300"
        onClick={generateNumber}
      >
        Generate Roll Number
      </button>

      <div className="mt-8">
        <input 
        className="px-4 py-3 my-2 sm:my-0 sm:mx-4 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
        type="text" name="" id="" readOnly  value={value}/>
      </div>
    </div>
  </div>
</div>
  );
}
