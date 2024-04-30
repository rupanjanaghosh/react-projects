import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css';
function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [Password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, number, char, setPassword])

  const generateRandomPassword= useCallback(() => {
    passwordGenerator()
  },[length,number, char, setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])
  return (
    <>
    <h1 className='text-4xl text-center text-white mt-5 font-semibold'>Password Generator</h1>
    <div className='flex flex-col items-center justify-start rounded-lg bg-gray-400 mt-10 w-3/6 py-10 mx-auto'>
    <div className='relative'>
  <input
    type='text'
    value={Password}
    className='rounded-lg py-1 px-3 w-96 h-10 bg-white'
    placeholder='Password'
    readOnly
    ref={passwordRef}
  />
  <button onClick={copyPasswordToClipboard} className='absolute bg-black text-white font-serif py-2 px-3 rounded-lg  shadow-md '> copy</button>
  <button onClick={generateRandomPassword} className='absolute right-1 top-0 bg-white text-white font-serif py-1 px-3 rounded-lg '>
  <img className='h-8 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/1024px-Refresh_icon.svg.png'/>
  </button>
        </div>
  <div className='flex text-sm gap-x-2'>
      <div className='flex  gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='font-serif'>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
       <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput" className='font-serif'>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" className='font-serif'>Characters</label>
      </div>
    </div>
</div>


    </>
  )
}

export default App
