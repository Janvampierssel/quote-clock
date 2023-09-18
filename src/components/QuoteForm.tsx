import {useState } from "react";

let fontSize = 12;

const QuoteForm = ({setQuote, findFontSize}:{setQuote: Function, findFontSize: Function}) => {
  const [text, setText] = useState('"Roman has this unique ability to Sucky Wucky"\n- God, 1945');

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a quote");
      return;
    }

    setQuote(text);
  }
  
  return (
    <form className="quote-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Quote: </label>
        <textarea
          placeholder="Add Quotes"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Quote" className="btn" />
    </form>
  )
}

export default QuoteForm

/*
Possible quote inputs:

"Quote";"Author", "Quote2";"Author2"

"Quote"
- Author
"Quote2"
- Author2

*/