import Quote from './components/Quote'
import QuoteForm from './components/QuoteForm'
import Clock from './components/Clock'
import { useEffect, useState } from 'react'
// import {  } from 'react-router-dom'

function App() {
  const [quote, setQuote] = useState("");

  const findFontSize = () => {
    const quoteWrap = document.querySelector('.quote-wrap') as HTMLElement;
    const quoteOuter = document.querySelector('.quote-outer') as HTMLElement;
  
    if (quoteWrap && quoteOuter) {
      let fontSize = 12;
      quoteWrap.style.fontSize = fontSize + 'px';
      
      const maxHeight = quoteOuter.clientHeight;
      let currentHeight = quoteWrap.clientHeight;
      
      const adjustFontSize = () => {
        if (currentHeight < maxHeight && fontSize < 100) {
          fontSize = fontSize + 1;
          quoteWrap.style.fontSize = fontSize + 'px';
          currentHeight = quoteWrap.clientHeight;
          adjustFontSize();
        }
      };
  
      adjustFontSize();
    }
  };
  

  useEffect(() => {
    findFontSize();
  },[quote])

  return (
  <div className="app">
    {!quote ?
    <QuoteForm setQuote={setQuote} findFontSize={findFontSize}/>
    : <>
    <Clock />
    <Quote quote={quote}/>
    <button onClick={() => {setQuote("")}}>Back</button>
    </>
  }
  </div>
  )
}

export default App;
