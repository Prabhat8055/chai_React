import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [passsword, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const passCopy = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()-_=+|[]{};:/?.>~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    //to highlight the copied value
    passCopy.current?.select();
    //if you want to select in range
    // passCopy.current?.setSelectionRange(0, 9);
    //to actually copy the value
    window.navigator.clipboard.writeText(passsword);

    setButtonText(buttonText === "Copy" ? "Copied" : "Copy");
  }, [passsword, buttonText]);

  useEffect(() => {
    passwordGenerator();
    setButtonText("Copy");
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col justify-center gap-10 items-center w-full h-screen text-center bg-gray-800 text-4xl text-white p-10  ">
        <h1 className="">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-600 w-100 align-middle">
          <input
            type="text"
            value={passsword}
            className="outline-none  py-1 px-3 text-xl w-full"
            placeholder="password"
            readOnly
            ref={passCopy}
          />
          <button
            className="text-xl cursor-pointer text-right outline-none bg-blue-700 px-3 py-0.3 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            {buttonText}
          </button>
        </div>
        <div>
          <input
            type="range"
            min={6}
            max={75}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-xl p-2">Length:{length}</label>
        </div>
        <div className="flex gap-6">
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="text-xl">Number</label>

          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={characterAllowed}
            onChange={() => setcharacterAllowed((prev) => !prev)}
          />
          <label className="text-xl">Special Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
