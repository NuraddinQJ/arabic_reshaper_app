import React, { useState } from 'react'
import { convertArabic } from 'arabic-reshaper'

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleButtonClick = () => {
    const reshapedText = convertArabic(inputText).split('').reverse().join('')
    setOutputText(reshapedText)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleButtonClick()
    }
  }

  return (
    <div className="App">
      <h1>Arabic Reshaper App</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter Arabic text..."
      />
      <button onClick={handleButtonClick}>Reshape</button>
      <div>
        <h2>Output Text:</h2>
        <p>{outputText}</p>
      </div>
    </div>
  )
}

export default App
