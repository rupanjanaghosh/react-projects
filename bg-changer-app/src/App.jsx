import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
  
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap  bg-white  w-4/5 h-14 top-10 left-52
         rounded-lg gap-2 justify-center'>
          <button className='flex flex-wrap rounded-full  px-6 py-1 j text-white top-14 items-center mt-1 mb-1 ml-1'
          style={{backgroundColor:"green"}}
          onClick={() => setColor("green")}>Green</button>
           <button className=' flex flex-wrap rounded-full  px-7 py-1 j text-white top-14 ml-2 outline-2 mt-1 mb-1 items-center '
          style={{backgroundColor:"darkred"}}
          onClick={() => setColor("darkred")}>Red</button>
          <button className=' flex flex-wrap rounded-full  px-8 py-1 j text-white top-14 ml-2 outline-2 mt-1 mb-1 items-center '
          style={{backgroundColor:"hotpink"}}
          onClick={() => setColor("crimson")}>Hot Pink</button>
          <button className='flex flex-wrap rounded-full  px-7 py-1 j text-white top-14 items-center mt-1 mb-1 ml-1'
          style={{backgroundColor:"skyblue"}}
          onClick={() => setColor("skyblue")}>Blue</button>
          <button className=' flex flex-wrap rounded-full  px-7 py-1 j text-white top-14 ml-2 outline-2 mt-1 mb-1 items-center '
          style={{backgroundColor:"pink"}}
          onClick={() => setColor("Pink")}>Pink</button>
           <button className=' flex flex-wrap rounded-full  px-7 py-1 j text-white top-14 ml-2 outline-2 mt-1 mb-1 items-center '
          style={{backgroundColor:"purple"}}
          onClick={() => setColor("Purple")}>Purple</button>
           <button className=' flex flex-wrap rounded-full  px-7 py-1 j text-white top-14 ml-2 outline-2 mt-1 mb-1 items-center '
          style={{backgroundColor:"yellowgreen"}}
          onClick={() => setColor("Yellowgreen")}>Light Green</button>
           <button className=' flex flex-wrap rounded-full  px-7 py-1 j text-white top-14 ml-2 outline-2 mt-1 mb-1 items-center '
          style={{backgroundColor:"turquoise"}}
          onClick={() => setColor("turquoise")}>Turquoise</button>
           <button className=' flex flex-wrap rounded-full  px-7 py-1 j text-white top-14 ml-2 outline-2 mt-1 mb-1 items-center '
          style={{backgroundColor:"navy"}}
          onClick={() => setColor("navy")}>Navy Blue</button>
          
         </div>
      </div>
  
  )
}

export default App
