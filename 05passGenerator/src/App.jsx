import { useCallback, useState,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [characterAllowed, setCharacter] = useState(false);
  const [pass, setPass] = useState("");
  const passRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);  //we used + here to concatinate pass characters
    }

    setPass(pass);
  }, [length, numAllowed, characterAllowed, setPass]);

  const copyPassToClip=useCallback(()=>{
    window.navigator.clipboard.writeText(pass)
     //passRef.current.select();
     alert("Password copied to clipboard!");
  },[pass])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className=" bg-white outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
          
           onClick={copyPassToClip}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-400">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
