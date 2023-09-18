const Quote = ({ quote }: { quote: string}) => {

  return (
    <div className="quote-outer">
      <div className="quote-wrap">
        {quote}
      </div>
    </div>
  );
}

export default Quote;
