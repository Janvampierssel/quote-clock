import {useState, FormEvent } from "react";

const QuoteForm = ({setQuote}:{setQuote: Function}) => {
  const [text, setText] = useState('"Roman has this unique ability to Sucky Wucky"\n- God, 1945');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a quote");
      return;
    }

    // Every quote is two lines stored into an array, which is then stored in another array with all the quotes
    // Need to recheck code first and implement properly

    /* ! Quote structure
        Quote       \n
        - Author    \n
        Quote 2     \n
        - Author2   \n

    /* const lines:string[] = text.split("\n");
    const quoteArray:string[][] = [];

    for (let i = 0; i < lines.length; i += 2) {
      if (i + 1 < lines.length) {
        quoteArray.push([lines[i], lines[i + 1]]);
      } else {
        // Handle odd number of lines (e.g., if the last line doesn't have a pair)
        quoteArray.push([lines[i]]);
      }
    }
    console.log(quoteArray); */

    setQuote(text);
  }
  
  return (
    <form className="quote-form" onSubmit={onSubmit}>
        <label>Quote App </label>
        <textarea
          placeholder="Add Quotes"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

      <input type="submit" value="Display >" className="form-button"/>
    </form>
  )
}

export default QuoteForm