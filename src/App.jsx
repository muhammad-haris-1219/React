import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [color, setColor] = useState('#F2F0EF');
  let [length, setLength] = useState(8)
  let [char, setChar] = useState(false)
  let [num, setNum] = useState(false)
  let [password, setPassword] = useState('');

  let BG_Color = () => {
    let colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(colorCode);
   };

  let passwordGenerator = useCallback(() => {
    let pw = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (num) str += '0123456789';
    if (char) str += '!@#$%^&*-_+=[]{}~`';
    for (let j = 0; j < length; j++) {
      let alphaIndex = Math.floor(Math.random() * str.length + 1);
      pw += str[alphaIndex];
      // pw +=str.charAt(alphaIndex)
    }
    setPassword(pw)
  }, [length, num, char, setPassword]);

  let refPassword = useRef();
  let copyPassword = useCallback(() => {
    refPassword.current?.select()
    refPassword.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGenerator()
    BG_Color()
  }, [length, num, char, passwordGenerator])

  return (
    <>
        <main
  className="w-screen h-screen flex items-center justify-center transition-colors duration-500"
  style={{ background: color }}
>
  <article className="w-full max-w-md p-6 border border-gray-200 rounded-2xl shadow-xl bg-white text-center">
    <header className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 tracking-wide">Password Generator</h2>
    </header>

    <section className="mb-6">
      <p className="text-gray-600 mb-6">Customize your password settings below:</p>

      <input
        className="w-full bg-gray-100 text-gray-800 p-4 rounded-lg border border-gray-300 font-mono mb-6 text-center text-lg focus:outline-none"
        type="text"
        id="passwordDisplay"
        placeholder="Your password will appear here"
        readOnly
        value={password}
        ref={refPassword}
      />

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <input
            type="checkbox"
            id="includeCharacters"
            className="form-checkbox text-blue-600 h-4 w-4"
            checked={char}
            onChange={() => setChar((prev) => !prev)}
          />
          Special Characters
        </label>

        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <input
            type="checkbox"
            id="includeNumbers"
            className="form-checkbox text-blue-600 h-4 w-4"
            checked={num}
            onChange={() => setNum((prev) => !prev)}
          />
          Numbers
        </label>
      </div>

      <div className="mb-6">
        <label htmlFor="lengthRange" className="block text-gray-700 font-medium mb-2">
          Password Length
        </label>
        <input
          type="range"
          id="lengthRange"
          name="lengthRange"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="text-sm text-gray-600 mt-2 text-center">
          Length: <span className="font-semibold">{length}</span> characters
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={copyPassword}
        >
          Copy Password
        </button>
      </div>
    </section>

    <footer className="text-xs text-gray-400 mt-6">
      Passwords are generated automatically based on your selected options.
    </footer>
  </article>
</main>

    </>
  )
}

export default App
